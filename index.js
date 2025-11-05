const express=require("express")
const app=express();

app.get('/getdata',(req,res)=>{
    res.send({
        "status":200,
        "message":"hello this is my first program"
    })
})
app.listen(5000,()=>{
    console.log("server is listen on 5000")
})