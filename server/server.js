const express = require('express');
const path = require('path');
const fs =require('fs');
const employeeController = require('./controller.js');

const app = express();
const PORT = 3000;

app.use(express.json());




//GET THE WHOLE TABLE
app.get('/table', employeeController.getDb,  (req, res) => {
    return res.status(200).json(res.locals.result);
})

//filter by EMPLOYEE ID
app.get('/id/:id', employeeController.filterById, (req, res) => {
    return res.status(200).json(res.locals.result);
})


//filter by DEPARTMENT
app.get('/department/:dept', employeeController.filterByDept, (req, res) => {
    return res.status(200).json(res.locals.result);
})

//filter by ROLE
app.get('/role/:role', employeeController.filterByRole, (req, res) => {
    return res.status(200).json(res.locals.result);
})

//filter by SALARY
app.get('/salary/:num', employeeController.filterBySalary, (req, res) => {
    return res.status(200).json(res.locals.result);
})

//ADD A ROW TO TABLE, INFO IN REQ BODY
app.post('/add', employeeController.addDb, employeeController.getDb, (req, res) => {
    return res.status(200).json(res.locals.result);
})

//UPDATE A ROW VALID ENTRIES ---> name, role, dept, salay, type, phone_number, email
app.patch('/update/:id', employeeController.updateDb, employeeController.filterById, (req, res) => {
    return res.status(200).json(res.locals.result);
})



//DELETE A ROW 
app.delete('/delete/:id', employeeController.deleteOne, employeeController.getDb,  (req, res) => {
    return res.status(200).send(res.locals.result);
})




//SERVER CHECK
app.get('/', (req, res) => {
    return res.status(200).send('the server works!!');
})

//unknown path handler
app.use('*', (req, res) => {
    return res.status(404).send('404 page does not exist');
  });

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
