const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'askquestions',
  password: 'askquestions',
  database: 'askquestions'
});

connection.connect()

let queryStatement = "LOAD DATA LOCAL INFILE '/Users/kylemccarty/Desktop/gitTest/askTheCommunity/database/seed_data/users.txt' INTO TABLE user FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'"

connection.query(queryStatement, function (error, results, fields) {
  if (error) {
    console.log('error inserting data', error)
  } else {
    console.log('Inserted many data')
    process.exit()
  }
});