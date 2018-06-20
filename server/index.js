const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { User } = require('../database/schemas.js');
const { Question } = require('../database/schemas.js');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
// const corsOptions = {
//     origin: 'http://18.144.13.22/',
//     optionsSuccessStatus: 200
//   };

const app = express();

const routes = require('./routes');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(cors());

server.use('/api', routes);

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})