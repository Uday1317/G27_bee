const mongoose = require('mongoose');

async function connectToMongo() {
  await mongoose.connect('mongodb+srv://uday1882:qEcnyn-nohdec-gynri9@cluster0.teornqn.mongodb.net/uday').
  then(()=>{console.log("connect to mongo")});
}

module.exports={connectToMongo}