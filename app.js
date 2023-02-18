const hbs = require('hbs');
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico

app.use(express.static('public'))




app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Jose Morales',
    titulo: 'Curso de node'
  });
})
app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Jose Morales',
    titulo: 'Curso de node'
  })
})
app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Jose Morales',
    titulo: 'Curso de node'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})