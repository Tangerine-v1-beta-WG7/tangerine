import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const OnForm = () => {

    const navigate = useNavigate();

    const formDefaults = {
        name: '',
        role: '',
        department: '',
        salary: '',
        start_date: '',
        type: '',
        birthday: '',
        phone_number: '',
        email: '',
    }

    const [form, setForm] = useState(formDefaults)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await fetch('api/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });
            setForm(formDefaults);
            navigate('/');
        }

        catch (error) {
            console.error('An error occurred:', error);
        }

    }

    return (
        <div id='form-component'>
            <form>
                <fieldset id='employee-info'>
                    <legend>Employee Information</legend>
                    <ul>
                        <li>
                            <label htmlFor="name">Employee Name</label>
                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" name="role" value={form.role} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" value={form.department} onChange={handleChange}>
                                <option value="Education">Education</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Operations">Operations</option>
                            </select>

                        </li>
                        <li>
                            <label htmlFor="salary">Salary</label>
                            <input type="text" id="salary" name="salary" value={form.salary} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="start">Start Date</label>
                            <input type="start" id="start" name="start_date" value={form.start_date} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="type">Type</label>
                            <input type="text" id="type" name="type" value={form.type} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="text" id="dob" name="birthday" value={form.birthday} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone_number" value={form.phone_number} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
                        </li>

                    </ul>

                    <button className='btn' id='addNew' onClick={handleClick}>Add New Employee</button>

                </fieldset>

            </form>
        </div>
    )
}

export default OnForm