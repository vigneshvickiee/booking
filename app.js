const express = require('express');
const app = express();
const Booking = require('./models/tb');
const mongoose = require('mongoose');
 
const dbURI = 'mongodb+srv://vicky:6380880446kcs@nodetuts.0htg2.mongodb.net/ticket-booking?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true , useUnifiedTopology:true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
 

app.get('/',(req,res) => {
    const movie = [
        {title : "Bahubali - 1"},
        {title : "Robot 2.0"},
        {title : "Master"}
    ]
    res.render('index',{movies:movie,title :'Welcome'});
})

app.get('/login',(req,res) => {
    res.render('login',{title :'Login'});
})

app.get('/book',(req,res) => {
    const movie = [
        {title : "Bahubali - 1"},
        {title : "Robot 2.0"},
        {title : "Master"}
    ]
    res.render('book',{title:'book',movies:movie});
})

var seatnos=[];

app.post('/end',(req,res) => {
    const booking = new Booking(req.body);
    const sno = req.body.seatno;
    console.log(seatnos);
    const movie = [
        {title : "Bahubali - 1"},
        {title : "Robot 2.0"},
        {title : "Master"}
    ]
    booking.save()
        .then((result) => {
            res.render('end',{title:'Thankyou',seats:sno,movies:movie});
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/admin',(req,res) => {
    const movie = [
        {title : "Bahubali - 1"},
        {title : "Robot 2.0"},
        {title : "Master"}
    ]
    res.render('admin',{title:'Admin',seats:seatnos,movies:movie});
})

app.get('/end',(req,res) => {
    const movie = [
        {title : "Bahubali - 1"},
        {title : "Robot 2.0"},
        {title : "Master"}
    ]
    res.render('end',{title:'Thankyou',movies:movie});
})

