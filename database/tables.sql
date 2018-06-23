DROP DATABASE IF EXISTS askquestions;
CREATE DATABASE askquestions;

USE askquestions;

CREATE TABLE question (
  user_id int,
  restaurant_id int,
  text text,
  parent_id int,
  helpful int
);

CREATE TABLE user (
  username varchar(255),
  imageurl varchar(255)
);