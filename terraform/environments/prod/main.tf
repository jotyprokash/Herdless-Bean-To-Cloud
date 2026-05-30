terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

module "vpc" {
  source = "../../modules/vpc"

  vpc_cidr             = "10.0.0.0/16"
  public_subnets_cidr  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets_cidr = ["10.0.10.0/24", "10.0.20.0/24"]
  azs                  = ["ap-southeast-1a", "ap-southeast-1b"]
  environment          = "prod"
}

module "ecr" {
  source      = "../../modules/ecr"
  repo_name   = "herdless-app"
  environment = "prod"
}

module "rds" {
  source = "../../modules/rds"

  vpc_id              = module.vpc.vpc_id
  private_subnet_ids  = module.vpc.private_subnet_ids
  db_name             = "herdless"
  db_user             = "herdless_prod"
  db_password         = "USE_SECRETS_MANAGER_OR_TF_VAR" 
  environment         = "prod"
}

module "eks" {
  source = "../../modules/eks"
  
  cluster_name       = "herdless-cluster-prod"
  vpc_id             = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids
  environment        = "prod"
}
