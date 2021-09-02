const nostra = require('nostra');
const express =require('express');

var path = require('path');
const bodyparser = require("body-parser"); 

app = express();
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded(true))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug') 

app.get('/',(req,res)=>{
    let fortune = nostra.generate();
   
    res.status(200).render('index',{fortune})
})


app.listen(3000,()=>{console.log(`Server is running at port 3000`)})