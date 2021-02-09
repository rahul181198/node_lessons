const express = require('express');
const bodyParser =require('body-parser');
const mongoose =require('mongoose');
const dotenv = require('dotenv');



dotenv.config();
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.connection
  .once("open", () => console.log("Connected to db!"))
  .on("error", (error) => {
    console.log('error', error);
  });

// set up express app
const app = express();
const routes= require('./routes/api');


app.use(bodyParser.json());
// initialize routes
app.use('/api',routes);



// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});