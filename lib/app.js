const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.set('view engine', 'pug');
app.set('views', './views');

const documentation = require('./controllers/documentation');
const apiV1 = require('./controllers/api-v1/api');

app.use('/', documentation);
app.use('/api/v1/', apiV1);


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
