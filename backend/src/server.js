import express from 'express';
import dotenv from "dotenv"
import cors from "cors";


import notesRoutes from './routes/notesRoutes.js'
import { ConnectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 5001   ;
app.use(cors());

app.use(express.json());

app.use(rateLimiter)

app.use("/api/notes",notesRoutes);

ConnectDB().then(()=>{
    app.listen(port,()=>{
    console.log("Server started on Port: ",port);
    });
});

app.get("/",(req,res)=>{
    res.send('working')
})

