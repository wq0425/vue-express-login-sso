const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/login';

module.exports = app => {
    mongoose.connect(mongoUrl, () => {
        console.log('mongodb connect')
    })
}