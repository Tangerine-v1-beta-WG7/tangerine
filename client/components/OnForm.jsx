import React, { useState } from "react";

const OnForm = () => {

    const [form, setForm] = useState({
        employee_name: '',
        role: '', 
        department: '',
        salary: '', 
        start: '', 
        type: '', 
        dob: '',
        phone: '', 
        email: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value 
        })
    }

    const handleClick = (e) => {
        console.log(form);
    }

    return (
        <div id='form-component'>
            <form>
                <fieldset id='employee-info'>
                    <legend>Employee Information</legend>
                    <ul>
                        <li>
                            <label htmlFor="name">Employee Name</label>
                            <input type="text" id="name" name="employee_name" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" name="role" onChange={handleChange}/>
                        </li>
                        <li>
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" onChange={handleChange}>
                                <option value="education">Education</option>
                                <option value="engineering">Engineering</option>
                                <option value="human-resources">Human Resources</option>
                                <option value="operations">Operations</option>
                            </select>
                            
                        </li>
                        <li>
                            <label htmlFor="salary">Salary</label>
                            <input type="text" id="salary" name="salary" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="start">Start Date</label>
                            <input type="start" id="start" name="start" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="type">Type</label>
                            <input type="text" id="type" name="type" onChange={handleChange} /> 
                        </li>
                        <li>
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="text" id="dob" name="dob" onChange={handleChange} />
                        </li>
                        <li>   
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" onChange={handleChange} />
                        </li>
                      
                    </ul>
                    <button className='btn' id='addNew' onClick={handleClick}>Add New Employee</button>

                </fieldset>
    
            </form>
        </div>
    )
}

export default OnForm