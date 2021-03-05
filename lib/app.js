const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/arithmetic', require('./controllers/arithmetic'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res, next) => {
  res.render('home/home', {
    header: 'This is the header!'
  });
});

app.get('/arithmetic', (req, res, next) => {
  res.render('arithmetic/arithmetic', {
    header: 'Arithmetic'
  });
});


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
