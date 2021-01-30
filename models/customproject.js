const mongoose = require('mongoose')

const customprojectSchema = new mongoose.Schema({
    name : {type: String},
    email : {type: String},
    phone : {type: String},
    message : {type: String}
})

module.exports = mongoose.model('project', customprojectSchema)