const express= require('express');
//express app
const app =express();
//register view engine
app.set('view engine','ejs');
//app.set('views','myviews'); this is used when we want to make a diffrenet folder  our views folder 
// listen for requests
app.listen(3000);
app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    //res.sendFile('./views/index.html',{root:__dirname});
     //res.render('index');
     res.render('index',{title:'home',blogs:blogs});
})
app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html',{root:__dirname});
    //res.render('about');
    res.render('about',{title:'about'});
})
app.get('/blogs/create',(req,res)=>{
    //res.render('create');
    res.render('create',{title:'create a new blog'});
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