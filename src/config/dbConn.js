const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect( , {useNew = true})
    } catch(err) {
        console.log(err);
    }
}