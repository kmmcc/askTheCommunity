const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'askquestions',
  password: 'askquestions',
  database: 'askquestions'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;