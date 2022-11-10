const mongoose = require("mongoose")
const { MONGODB_URL } = require(".")

const connection = async ()=>{
    try {
        const conn = await mongoose.connect(`mongodb://username@mongo_server_ip:27017`)
        console.log("Mongo DB connected: ",conn.connection.host)
    } catch (error) {
        console.log("Error config-db: "+error)
    }
}

module.exports = {connection,mongoose}