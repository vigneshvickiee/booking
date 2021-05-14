const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var arr=[];
const movieSchema = new Schema({
    movie: {
        type: String,
        required: true
    },
    count: {
        type: String,
        required: true
    },
    seatno: {
        type: Array,
        required: true
    } 
},{timestamps:true});
    const Booking= mongoose.model('Booking',movieSchema);
    module.exports = Booking;
