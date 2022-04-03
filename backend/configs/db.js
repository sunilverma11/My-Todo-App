const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://srksaroya:sunil@sunilcluster.s9by7.mongodb.net/todoDB?retryWrites=true&w=majority")
}