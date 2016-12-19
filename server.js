var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/dynamic-banner1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dynamic-banner1.jpg'));
});
app.get('/ui/dynamic-banner2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dynamic-banner2.jpg'));
});
app.get('/ui/dynamic-banner3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dynamic-banner3.jpg'));
});
app.get('/ui/icon-responsive-web-design.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon-responsive-web-design.png'));
});
app.get('/ui/AboutUs.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'AboutUs.png'));
});
app.get('/ui/venkateh.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'venkateh.jpg'));
});
app.get('/ui/fruit1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fruit1.jpg'));
});
app.get('/ui/fruit2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fruit2.jpg'));
});
app.get('/ui/fruit3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fruit3.jpg'));
});
app.get('/ui/fruit4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fruit4.jpg'));
});
app.get('/ui/fruit5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fruit5.jpg'));
});
app.get('/ui/dryfruit1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dryfruit1.jpg'));
});
app.get('/ui/dryfruit2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dryfruit2.jpg'));
});
app.get('/ui/peanut3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'peanut3.jpg'));
});
app.get('/ui/veg1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'veg1.jpg'));
});
app.get('/ui/veg2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'veg2.jpg'));
});
app.get('/ui/veg3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'veg3.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
