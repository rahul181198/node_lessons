const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { json } = require('express');
const cookieParser = require('cookie-parser');
const { requireAuth ,checkUser} = require('./middleware/authMiddleware');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());


// view engine
app.set('view engine', 'ejs');

// database connection
/*const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';*/
const dbURI = 'mongodb+srv://rahul:rahul1234@cluster0.xqw3h.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));


  dotenv.config();
  app.listen(3000);

/*mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.connection
  .once("open", () => console.log("Connected to db!"))
  .on("error", (error) => {
    logger.log('error', error);
  });*/

// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.use(authRoutes);



/*app.get('/set-cookies',(req,res)=>{
  //res.setHeader('Set-Cookie', 'newUser=true');
  
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send('dhchubchdb');
});


app.get('/read-cookies',(req,res)=>{
  const cookies = req.cookies;
  console.log(cookies.newUser);

  res.json(cookies);
});*/