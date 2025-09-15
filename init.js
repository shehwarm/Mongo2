const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() { 
    await mongoose.connect('mongodb://localhost:27017/whatsapp'); 
}

let allChats = [
    {
    from: "Alice",
    to: "Bob",
    message: "Hello, Bob!",
    created_at: new Date()
   },
    {
    from: "Bob",
    to: "Alice",
    message: "Hi, Alice!",
    created_at: new Date()
   },
    {   
    from: "Alice",
    to: "Bob",
    message: "How are you?",
    created_at: new Date()
   }    
];

Chat.insertMany(allChats);

