import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import { ConnectDB } from './config/db.js';
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 5001   ;
ConnectDB()

app.use("/api/notes",notesRoutes);

app.get("/",(req,res)=>{
    res.send('working nigga')
})

app.listen(port,()=>{
    console.log("Server started on Port: ",port);
});