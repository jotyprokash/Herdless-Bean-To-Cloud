variable "repo_name" { type = string }
variable "environment" { type = string }

resource "aws_ecr_repository" "main" {
  name                 = "${var.repo_name}-${var.environment}"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Environment = var.environment
  }
}

output "repository_url" {
  value = aws_ecr_repository.main.repository_url
}
