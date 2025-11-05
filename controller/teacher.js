 
const getTeacherdata=(req,res)=>{
     res.send({
        "status":"data inserted succesfully",
        "statuscode":200
    })
};

const insertTeacherdata=(req,res)=>{
    res.send({
        "status":"data inserted succesfully",
        "statuscode":200
    })
};


const updateTeacherdata=(req,res)=>{
    res.send({
        "status":"data updated successfully",
        "statuscode":200
    })
     };

     const deleteteacher = (req, res) => {
  const { name } = req.params;
  res.send({
    status: `Teacher '${name}' deleted successfully`,
    statuscode: 200
  });
};

   


module.exports={getTeacherdata,insertTeacherdata,updateTeacherdata,deleteteacher}