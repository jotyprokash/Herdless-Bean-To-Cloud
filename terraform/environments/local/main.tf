terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region                      = "us-east-1"
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    ec2      = "http://localhost:4566"
    s3       = "http://localhost:4566"
    rds      = "http://localhost:4566"
    iam      = "http://localhost:4566"
    ecr      = "http://localhost:4566"
    eks      = "http://localhost:4566"
  }
}

module "vpc" {
  source = "../../modules/vpc"

  vpc_cidr             = "10.0.0.0/16"
  public_subnets_cidr  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets_cidr = ["10.0.10.0/24", "10.0.20.0/24"]
  azs                  = ["us-east-1a", "us-east-1b"]
  environment          = "local-floci"
}

module "ecr" {
  source      = "../../modules/ecr"
  repo_name   = "herdless-app"
  environment = "local-floci"
}

module "rds" {
  source = "../../modules/rds"

  vpc_id              = module.vpc.vpc_id
  private_subnet_ids  = module.vpc.private_subnet_ids
  db_name             = "herdless"
  db_user             = "herdless"
  db_password         = "herdlesspass" # In production, use AWS Secrets Manager
  environment         = "local-floci"
}

module "eks" {
  source = "../../modules/eks"
  
  cluster_name       = "herdless-cluster-local"
  vpc_id             = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids
  environment        = "local-floci"
}
