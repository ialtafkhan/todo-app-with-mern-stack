const mongoose = require("mongoose")
require('colors')


const db = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to database succssfully`.bgGreen);

    } catch (error) {
        console.log(`error`.bgRed);
        process.exit()


    }
}
module.exports = db