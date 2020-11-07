const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

let instance = process.env.NODE_APP_INSTANCE || '0';


app.get("/", (req, res, next) =>{
    res.render('home', {
        instance: instance
    })
})

app.listen("400"+instance); //for nodejs load balance
console.log("Listining at","400"+instance)

// app.listen("4000"); //for just pm2 cluster only
// console.log("Listining at","4000")