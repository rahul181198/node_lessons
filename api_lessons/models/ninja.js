const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 const ninjaSchema    = new Schema({
     name:{
         type:String,
         required:true,
     },
     rank:{
         type:String,
         required:true
     },
     available:{
        type:Boolean,
         default:false
     },
     
 })
 const Ninja = mongoose.model('Ninja',ninjaSchema);
 module.exports= Ninja;