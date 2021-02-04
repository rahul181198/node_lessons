const express= require('express');
const Blog = require('../models/blog');
const router= express.Router();


router.get('/',(req,res)=>{
    
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index',{title:'all blogs',blogs:result}); 
      })
      .catch(err => {
        console.log(err);
      });
  
});

router.post('/',(req,res)=>{
    const blog = new Blog(req.body);
    
    blog.save()
  .then(result => {
    res.redirect('/blogs');
  })
  .catch(err => {
    console.log(err);
  });

});
router.get('/create',(req,res)=>{
    //res.render('create');
    res.render('create',{title:'create a new blog'});
})
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
  .then(result => {
    res.render('details',{title:'blog details',blog:result});
  })
  .catch(err => {
    console.log(err);
  });

})
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  
module.exports=router;