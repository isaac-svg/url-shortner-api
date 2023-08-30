import mongoose from "mongoose";


const startDB = async () => { 

    try {
     const db =   await mongoose.connect(process.env.MONGO_URI)

     
     console.log("Connected to db") // del during production
    } catch (error) {
        console.log(error)
        mongoose.connection.close()
    }
}

export default startDB