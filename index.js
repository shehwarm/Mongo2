const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() { 
    await mongoose.connect('mongodb://localhost:27017/whatsapp'); 
}

//Index Route
app.get("/chats", async (req, res) => {
   let chats = await Chat.find({});
   console.log(chats);
   res.render("index.ejs", { chats });
})

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});