variable "vpc_id" { type = string }
variable "private_subnet_ids" { type = list(string) }
variable "db_name" { type = string }
variable "db_user" { type = string }
variable "db_password" { type = string }
variable "environment" { type = string }

resource "aws_db_subnet_group" "main" {
  name       = "herdless-db-subnet-group-${var.environment}"
  subnet_ids = var.private_subnet_ids

  tags = {
    Name = "herdless-db-subnet-group-${var.environment}"
  }
}

resource "aws_security_group" "rds" {
  name        = "herdless-rds-sg-${var.environment}"
  description = "Allow Postgres inbound traffic"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    cidr_blocks     = ["10.0.0.0/16"] # Only allow VPC internal traffic
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "main" {
  identifier           = "herdless-db-${var.environment}"
  allocated_storage    = 20
  storage_type         = "gp3"
  engine               = "postgres"
  engine_version       = "15"
  instance_class       = "db.t4g.micro"
  db_name              = var.db_name
  username             = var.db_user
  password             = var.db_password
  parameter_group_name = "default.postgres15"
  skip_final_snapshot  = true
  publicly_accessible  = false
  db_subnet_group_name = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]

  tags = {
    Environment = var.environment
  }
}

output "db_endpoint" {
  value = aws_db_instance.main.endpoint
}
