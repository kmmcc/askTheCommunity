DROP DATABASE IF EXISTS askquestions;
CREATE DATABASE askquestions;

USE askquestions;

CREATE TABLE question (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int,
  p int,
  question text,
  parent_id int,
  helpful int,
  createdat varchar(255),
  updatedat varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255),
  imageurl varchar(255),
  PRIMARY KEY (id)
);