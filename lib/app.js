const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/arithmetic', require('./controllers/arithmetic'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', (req, res, next) => {
  res.render('home/home', {
    header: 'This is the header!'
  });
});


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
