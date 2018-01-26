const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear() );

app.get('/', (req, res) => {
  res.send('kabeer is awesome');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, ()=> {
  console.log('express UP ON 3000');
});
