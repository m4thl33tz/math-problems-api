const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

app.set('view engine', 'pug');
app.set('views', './views');

module.exports = app;
