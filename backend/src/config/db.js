import mongoose from "mongoose"
export async function ConnectDB(){
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);
        console.log("DB connected !");
    } catch (error) {
        console.log("Error connecting: ",error);
        process.exit(1);
    }
}