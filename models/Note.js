const mongoose = require('mongoose');

const noteschema={
    title:String,
    desc:String,
    status: String,
    date  :{
        type:Date,
        date: Date.now()
    }
    
}
const Note=mongoose.model('Note',noteschema)

module.exports={Note}