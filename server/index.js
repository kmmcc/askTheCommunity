const express = require('express');
const parser = require('body-parser');
const path = require('path');
const newRelic = require('newrelic')
// const { User } = require('../database/db_sql/schemas.js');
// const { Question } = require('../database/db_sql/schemas.js');
const db = require('../database/db_mongo/index.js')
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//Make connection to mongoDB

const app = express();

const { router } = require('./mongoRoutes.js');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(cors());

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})