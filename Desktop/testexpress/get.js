const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send("hello world");
    res.end();
}).listen(333,()=>{
    console.log("server is up and running");
})