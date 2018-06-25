DROP DATABASE IF EXISTS askquestions;
CREATE DATABASE askquestions;

USE askquestions;

CREATE TABLE question (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int,
  restaurant_id int,
  text text,
  parent_id int,
  helpful int,
  createdat ////////??????????????,
  updatedat ////////??????????????,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255),
  imageurl varchar(255)
);

//FORMAT -- INSERT INTO questions  (user_id, restaurant_id, text, parent_id, helpful, createdat, updatedat) VALUES (1, 1, 'I am Batman?', null, 6, current_timestamp, current_timestamp);