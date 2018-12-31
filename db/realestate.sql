CREATE DATABASE realestate_db;

USE realestate_db;

CREATE TABLE user_profile (
  user_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR (25) NOT NULL, 
  last_name VARCHAR (25) NOT NULL, 
  phone_number VARCHAR (10) NOT NULL,
  user_address VARCHAR (50) NOT NULL,
  username VARCHAR (25) NOT NULL,
  email VARCHAR (50) NOT NULL,
  user_password VARCHAR (18) NOT NULL, 
  PRIMARY KEY (user_id)
);

CREATE TABLE users_projects (
  project_id INT AUTO_INCREMENT NOT NULL,
  project_name VARCHAR (50) NOT NULL, 
  project_address VARCHAR (50) NOT NULL,
  project_city VARCHAR (50) NOT NULL, 
  project_state VARCHAR (50) NOT NULL, 
  after_repair_value INTEGER (9) NOT NULL,
  desired_profit INTEGER (9) NOT NULL,
  estimated_repair_cost INTEGER (9) NOT NULL,
  buyers_closing_cost INTEGER (9) NOT NULL, 
  sellers_closing_cost INTEGER (9) NOT NULL,
  realtor_fees INTEGER (4) NOT NULL, 
  monthly_holding_cost INTEGER (9) NOT NULL, 
  days_to_rehab INTEGER (4) NOT NULL,
  project_status BOOLEAN,
  PRIMARY KEY (project_id)
);
