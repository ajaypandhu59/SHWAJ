const express = require('express');
const router = express.Router();


const st = require('../controller/student');
const th = require('../controller/teacher');
const rg = require('../controller/register');
const lg = require('../controller/login');


router.get('/getdatastudent', st.getStudent);
router.post('/insertdatastudent', st.insertStudent);
router.put('/updatedatastudent/:name', st.updateStudent); 
router.delete('/deletedatastudent/:name', st.deleteStudent); 


router.get('/getdatateacher', th.getTeacherdata);
router.post('/insertdatateacher', th.insertTeacherdata);
router.put('/putdatateacher', th.updateTeacherdata);
router.delete('/deletedatateacher/:name', th.deleteteacher); 

router.post('/registerstudentdata', rg.registerUser);
router.post('/loginstudentdata', lg.loginstudent); 

module.exports = router;
 