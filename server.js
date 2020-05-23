const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const books = require('./routes/books');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = process.env.MONGODB_URI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB...'))
  .catch(err => console.log(err));

app.get('/api/books', (req, res) => {
  res.send('Get');
});

app.post('/api/books', (req, res) => {
  res.send('Post');
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
