CREATE DATABASE realestate_db
USE realestate_db

CREATE TABLE user_profile (
id INT AUTO_INCREMENT NOT NULL,
user_name VARCHAR(50) NOT NULL, 
user_password VARCHAR(20) NOT NULL, 
email VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE users_projects (
  id INT AUTO_INCREMENT NOT NULL,
  project_address VARCHAR(50) NOT NULL,
  -- Currently researching storage methods for multiple fields.
  calcs INTEGER(11) NOT NULL,
);



