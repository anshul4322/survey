const mongoose = require('mongoose');
const app = require('./app');

let server;

const url="mongodb+srv://sssecurities2710:uI9wAhPerkyc9smR@cluster0.jh2oxkt.mongodb.net/?retryWrites=true&w=majority"
const port = 8080;

mongoose
.connect(url, {
    // useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
.then(() => {
    app.listen(port, (req,res) => { 
        console.log(`Server started at ${port}`);
    })
    console.log("Connected to MongoDB");
});
