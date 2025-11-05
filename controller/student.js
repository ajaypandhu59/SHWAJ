// const slist=require('../student.json');
const database = require('../database/db');

// ✅ Get all students
const getStudent = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('student');
    const result = await collection.find().toArray();
    res.status(200).send(result);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send({ error: 'Failed to fetch student data' });
  }
};

// ✅ Insert student
const insertStudent = async (req, res) => {
  try {
    console.log('Incoming Data:', req.body);
    const newdata = req.body;

    const db = await database();
    const collection = db.collection('student');
    const result = await collection.insertOne(newdata);

    res.status(201).send({
      message: 'Data inserted successfully',
      insertedId: result.insertedId,
    });
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).send({ error: 'Failed to insert data' });
  }
};
const updateStudent = async (req, res) => {
  try {
    const name = req.params.name; // parameter in URL
    const updatedData = req.body;
    const db = await database();
    const collection = db.collection('student');

    const result = await collection.updateOne(
      { name: name },
      { $set: updatedData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ message: 'Student not found' });
    }

    res.send({ message: 'Student updated successfully' });
  } catch (err) {
    console.error('Error updating data:', err);
    res.status(500).send({ error: 'Failed to update student' });
  }
};

// 🔴 Delete student by name
const deleteStudent = async (req, res) => {
  try {
    const name = req.params.name;
    const db = await database();
    const collection = db.collection('student');
    const result = await collection.deleteOne({ name: name });

    if (result.deletedCount === 0) {
      return res.status(404).send({ message: 'Student not found' });
    }

    res.send({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error('Error deleting data:', err);
    res.status(500).send({ error: 'Failed to delete student' });
  }
};

module.exports = { getStudent,insertStudent,updateStudent,deleteStudent };

// const slist=require('./student.json');
// const database=require('../database/db')
// const getstudent=async (req,res)=>
// {
//     try{
//         const db=await database();
//         const collection =db.collection('student');
//         const result = await collection.find().toArray();
//         res.send(result);

//     }
//     catch(err)
// {
//     res.send(err)
// }
// }
// const insertdata=async(req,res)=>
// {
//     try{
//         console.log(req.body)
//         const newdata=req.body;
//         const db=await database();
//         const collection=db.collection('student');
//         const result=await collection.insertOne(req.body);
//         if(result.acknowledged==true)
//         {
//             res.send({
//                 "status":"data inserted successfully...",
//                 "statuscode":200,
//                 "data":result
//             })
//         }
//         else{
//             res.send({
//                 "status":"oops some issue occur,please try again...",
//                 "statuscode":400,

//             })
//         }

//     }
//     catch(err)
//     {
//         res.send(err)
//     }
// const slist=require('../student.json');

