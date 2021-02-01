const fs =require('fs');
/*fs.readFile('./docs/blog.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
});
// wrting files
fs.writeFile('./docs/blog.txt','hello worlds',()=>{
    console.log('file was wriiten');
})
// making and deleting directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
 if(err){
     console.log(err);
 }
 console.log('folder created')
});
}
else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder  deleted');
    });
}*/

//delete a file
if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted")
    });
}