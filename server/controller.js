const db = require('./model.js')

const employeeController = {};

//createing intial table
employeeController.createDb = async(req, res, next) => {
    try {
    const myQuery = `CREATE TABLE employees( employee_id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, role VARCHAR(50) NOT NULL, department VARCHAR(50) NOT NULL);`
    const result = await db.query(myQuery);
    res.locals.result = result;
    return next()
    } catch (err) {
        return next({
            message: {err: err}
        })
    }
}

//adding employees
employeeController.addDb = async(req, res, next) => {
    const { name, role, department, salary, type, birthday, phone_number, email} = req.body;
    let dateString = birthday;
    let [day, month, year] = dateString.split('/')
    const dateObj = new Date(+year, +month - 1, +day)
    try {
      const myQuery = 'INSERT INTO employees (employee_id, name, role, department, salary, type, birthday, phone_number, email) VALUES ( DEFAULT, $1, $2 , $3, $4, $5, $6, $7, $8)';
      const values = [name, role, department, Number(salary), type, dateObj, phone_number, email];
      console.log('these are values', values)
      const result = await db.query(myQuery, values);
      console.log(result);
      return next()
    } catch (err) {
      return next({
        message: {err: err}
    })
}

}

//view entire db
employeeController.getDb = async(req, res, next) => {
    try {
      const myQuery = 'SELECT * FROM employees'
      const result = await db.query(myQuery);
      res.locals.result = result.rows;
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}

//view parter of db by Dept
employeeController.filterByDept = async(req, res, next) => {
    const {dept} = req.params; 
    try {
      const myQuery = 'SELECT * FROM employees WHERE department = $1'
      const values = [dept];
      const result = await db.query(myQuery, values);
      res.locals.result = result.rows;
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}

//view parter of db by ID
employeeController.filterById = async(req, res, next) => {
    const {id} = req.params; 
    try {
      const myQuery = 'SELECT * FROM employees WHERE employee_id = $1'
      const values = [id];
      const result = await db.query(myQuery, values);
      res.locals.result = result.rows;
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}

//view parter of db by ROLE
employeeController.filterByRole = async(req, res, next) => {
    const {role} = req.params; 
    try {
      const myQuery = 'SELECT * FROM employees WHERE role = $1'
      const values = [role];
      const result = await db.query(myQuery, values);
      res.locals.result = result.rows;
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}

//filter by SALARY
employeeController.filterBySalary = async(req, res, next) => {
    const { num } = req.params; 
    console.log('THIS IS NUM', num)
    try {
      const myQuery = 'SELECT * FROM employees WHERE salary > $1'
      const values = [num];
      const result = await db.query(myQuery, values);
      res.locals.result = result.rows;
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}

//update a record
employeeController.updateDb = async(req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    const values = []
  
    if (body.salary){
        body.salary = Number(body.salary)
    }

    values.push(Object.entries(body))
    values.push(Number(id))
    const values2 = values.flat(Infinity);
    console.log('SHOULD BE VALUES2', values2)
    const column = values2.shift();

    try {
      const myQuery = `UPDATE employees SET ${column} = $1 WHERE employee_id = $2`
      const result = await db.query(myQuery, values2);
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}

}

//delete a row
employeeController.deleteOne = async(req, res, next) => {
    const { id } = req.params
    try {
      const myQuery = 'DELETE FROM employees WHERE employee_id = $1;'
      const value = [ id ]
      const result = await db.query(myQuery, value);
      console.log(result);
      return next()
    } catch (err) {
        console.log('this is an error', err);
      return next({
           message: {err: err}
        })
}
}


module.exports = employeeController;