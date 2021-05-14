require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => {
    console.error('error connecting to mongo cluster', err.message);
  });

const db = mongoose.connection;

module.exports = db;