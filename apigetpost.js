const express= require('express');
const app = express();
const port = 3000;
const cors=require('cors')
app.use(cors());
const indexRouter=require('./Routes/index')
app.use(express.json())
app.use('/',indexRouter);
app.listen(port,() =>
     {
    console.log(`Server is running on http://localhost:${port}`)
})
