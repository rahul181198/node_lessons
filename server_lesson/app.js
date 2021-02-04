const express= require('express');
const morgan =require('morgan');
const Blog = require('./models/blog');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes')
//express app
const app =express();


//connection to mongodb
const dbURI= 'mongodb+srv://rahul:rahul1234@nodetuts.xqw3h.mongodb.net/note-tuts?retryWrites=true&w=majority';
//mongoose.connect(dbURI);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>app.listen(3000))
  .catch(err => console.log(err));
//register view engine
app.set('view engine','ejs');
//app.set('views','myviews'); this is used when we want to make a diffrenet folder  our views folder 
// listen for requests


 
// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

/*app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
  });
  
  app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
  });*/
  app.use(morgan('dev'));

  // mongoose & mongo tests
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog 23',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  app.get('/single-blog', (req, res) => {
    Blog.findById('601b7b719ac753a4a9477b61')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  


/*app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    //res.sendFile('./views/index.html',{root:__dirname});
     //res.render('index');
     res.render('index',{title:'home',blogs:blogs});
})*/
app.get('/',(req,res)=>{
    res.redirect('/blogs');
})
app.use('/blogs',blogRoutes);

      

app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html',{root:__dirname});
    //res.render('about');
    res.render('about',{title:'about'});
})

/*redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
  });*/

//404 pages
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.render('404',{title:'404'});
});