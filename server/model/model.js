const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://narayananmanikandan04:Narayanan%402604@cluster0.mhdxb4z.mongodb.net/feedbackDB', {}).then(() => {
    console.log('dbconnect')
})

const dbfields = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message  : {
        type: String
    }
})

const modulefileexport = mongoose.model("feedbackdetails",dbfields)

module.exports = modulefileexport;