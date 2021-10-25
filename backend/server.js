import express from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => (item._id == req.params.id));
  res.send(note);
});

app.listen(PORT, console.log(`Server started at port ${PORT}`));
