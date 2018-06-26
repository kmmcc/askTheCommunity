const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'askquestions',
  password: 'askquestions',
  database: 'askquestions'
});

connection.connect()

let queryStatement = "LOAD DATA LOCAL INFILE '/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/seed_data/questions.txt' INTO TABLE question FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'"

connection.query(queryStatement, function (error, results, fields) {
  if (error) {
    console.log('error inserting data', error)
  } else {
    console.log('Inserted many data')
    process.exit()
  }
});
//make a function that will load the data
//establish connection
//run a query with the SQL command
//error handling
//use process.exit(), to exit and get a timestamp


  // 38068, 7703, Why spins the lettuce taste?, null, 76, Sun Sep 16 2018 15:43:47 GMT-0700 (PDT), Sun Sep 16 2018 15:43:47 GMT-0700 (PDT)
  // user_id int,
  // restaurant_id int,
  // question text,
  // parent_id int,
  // helpful int,
  // createdat varchar(255),
  // updatedat varchar(255),