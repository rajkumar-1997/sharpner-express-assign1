const http=require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    
    console.log('middleware first');
     //allow the request to continue in next middleware line
     next(); 
})

app.use((req,res,next)=>{
    
    console.log('middleware second');

    
    res.send('<h1> raj is a good student in coding</h1>');
   
   
}) 


app.listen(8000,()=>{
    console.log('server started at 8000port');
});