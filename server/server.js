require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const articleRouter = require('./routes/article-router');

const db = require('./db/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'mongoDB connection error'));

app.use('/api', articleRouter);

app.listen(process.env.PORT, () => {
  console.log('Server running on port:', process.env.PORT);
});