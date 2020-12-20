const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
 
const app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/assets', express.static(__dirname + '/assets'));

// SET OUR VIEWS AND VIEW ENGINE
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//homepage
app.get('/', (req, res) => {
    res.render('index');
   });

 //404 page
 app.use('/', (req,res) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
});
 
 app.listen(3000, () => console.log("Server is Running at port 3000"));
    
