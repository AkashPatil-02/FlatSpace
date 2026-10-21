
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { ConnectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const _dirname = path.resolve();

if(process.env.NODE_ENV!=="production"){
    app.use(cors());
}
app.use(express.json());

app.use("/api", rateLimiter);
app.use("/api/notes", notesRoutes);

const frontendPath = path.join(
  _dirname,
  "../frontend/FlatSpace/dist"
);

app.use(express.static(frontendPath));

if(process.env.NODE_ENV==="production"){
    app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
}

ConnectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on port:", port);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});
