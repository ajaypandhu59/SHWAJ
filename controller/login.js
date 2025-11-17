const database =require("../database/db");
const loginstudent=async(req,res)=>{
    try{
        console.log(req.body);
        const db=await database();
        const collection=db.collection('user');
        const result=await collection.findOne({username:req.body.username});
        if(result){
        if(result.password===req.body.password)
        {
            res.send({
                "status":"login succesfully",
                "statuscode":200,

            })
        }
        else{
            res.send({
                "status":"invalid username",
                "statuscode":400,
            })
        }
    }
        else{
            res.send({
                "status":"user not found",
                "statuscode":402,
            })
        }
    }
    catch(err)
    {
        res.send(err)
    } 
    }

module.exports={loginstudent}
