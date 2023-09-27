import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';

const OnForm = () => {



    const date = new Date();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    const currentDate =  date.getFullYear().toString() + '-' + month + '-' + day;
    const navigate = useNavigate();

    const formDefaults = {
        first_name: '',
        last_name: '',
        role: 'Accountant',
        department: 'Education',
        salary: '',
        start_date: currentDate,
        type: 'Full-Time',
        birthday: currentDate,
        phone_number: '',
        email: '',
        services: '',
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
            navigate('/home');
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
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" value={form.first_name} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" value={form.last_name} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="role">Role</label>
                            <select id="role" name="role" value={form.role} onChange={handleChange}>
                                <option value="Accountant">Accountant</option>
                                <option value="Architect">Architect</option>
                                <option value="Consultant">Consultant</option>
                                <option value="IT">IT</option>
                                <option value="Software Engineer">Software Engineer</option>
                            </select>
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
                            <input type="date" id="start" name="start_date" value={form.start_date} min={currentDate} onChange={handleChange}/>
                            {/*<input type="start" id="start" name="start_date" value={form.start_date} onChange={handleChange} />*/}
                        </li>
                        <li>
                            <label htmlFor="type">Type</label>
                            <select id="type" name="type" value={form.type} onChange={handleChange}>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Contractor">Contractor</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" name="birthday" value={form.birthday} max={currentDate} onChange={handleChange}/>
                            {/*<input type="text" id="dob" name="birthday" value={form.birthday} onChange={handleChange} />*/}
                        </li>
                        <li>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone_number" value={form.phone_number} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="services">Services</label>
                            <div class="checkbox-grid">
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="google" name="google" value={form.google} onChange={handleChange}/> 
                                    <label>Google</label>
                                </div>
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="slack" name="slack" value={form.slack} onChange={handleChange}/> 
                                    <label>Slack</label>
                                </div>
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="zoom" name="zoom" value={form.zoom} onChange={handleChange}/> 
                                    <label>Zoom</label>
                                </div>
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="adp" name="adp" value={form.adp} onChange={handleChange}/> 
                                    <label>ADP</label>
                                </div>
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="expensify" name="expensify" value={form.expensify} onChange={handleChange}/> 
                                    <label>Expensify</label>
                                </div>
                                <div>
                                    <input type="checkbox" class='checkbox-service' id="tripactions" name="tripactions" value={form.tripactions} onChange={handleChange}/> 
                                    <label>TripActions</label>
                                </div>
                                
                                
                            </div>
                            
                        </li>

                    </ul>

                    <button className='btn' id='addNew' onClick={handleClick}>Add New Employee</button>

                </fieldset>

            </form>
        </div>
    )
}

export default OnForm