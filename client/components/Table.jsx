import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Style from "/client/style.css"

const Table = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [employeeDropdownStates, setEmployeeDropdownStates] = useState({}); // Info drop-down toggle state

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [formData, setFormData] = useState({
        end_date: "",
        obTime: "",
    });

    const getTableFunc = () => {
        fetch("/api/table")
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData));
    }

    useEffect(getTableFunc, []);

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    const currentData = data.slice(firstRowIndex, lastRowIndex);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const formatDate = (databaseDate) => {
        const date = new Date(databaseDate);
        return date.toISOString().split('T')[0];
    };

    const clickHandle = async (employeeId) => {
        console.log('hello Out', employeeId);
        try {
            console.log('hello In');
            const res = await fetch(`/api/delete/${employeeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    end_date: formData.end_date,
                    obTime: formData.obTime,
                    employeeId: employeeId,
                }),
            });
            //rerenders table 
            getTableFunc();
        } catch (err) {
            console.log('error deleting employee');
        }
    }
    

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log("Form Data", formData);
    }

    return (
        <div className="container">
            <div className='tableHead'>
                <span className="tableHeadName">First Name</span>
                <span className="tableHeadName">Last Name</span>
                <span className="tableHeadName">Role</span>
                <span className="tableHeadName">Department</span>
                <span className="tableHeadName">Start Date</span>
                <span className="tableHeadName">Type</span>
            </div> 
            <div className="tableBody">
    {currentData.map((employee) => (
    <Accordion key={employee.employee_id}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography className="Typography">
            <span className="employeeInfo">{employee.first_name}</span>
            <span className="employeeInfo">{employee.last_name}</span>
            <span className="employeeInfo">{employee.department}</span>
            <span className="employeeInfo">{employee.role}</span>
            <span className="employeeInfo">{formatDate(employee.start_date)}</span>
            <span className="employeeInfo">{employee.type}</span>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <div className="employeeDetail">Salary: {employee.salary}</div>
            <div className="employeeDetail">Birthday: {employee.birthday}</div>
            <div className="employeeDetail">Email: {employee.email}</div>
            <div className="employeeDetail">Phone Number: {employee.phone_number}</div>
            <br />
                <div className="dropdown">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {dropdownOpen ? "Go Back" : "Offboard"}
                    </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <form>
                                    <ul>
                                        <li>
                                            <label htmlFor="end_date">Offboard Date </label>
                                            <input type="date" id="end" name="end_date" value={formData.end_date} onChange={handleFormChange}/>
                                        </li>
                                        <li>
                                            <label htmlFor="end_time">Offboard Time </label>
                                            <input type="time" id="obTime" name="obTime" required value={formData.obTime} onChange={handleFormChange}/>
                                        </li>
                                        <li>
                                        <button type="submit" onClick={() => clickHandle(employee.employee_id)}>Confirm Offboarding</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        )}
                    {dropdownOpen ? null : <button className="Button">Edit Info</button>}
                </div>
        </Typography>
        </AccordionDetails>
    </Accordion>
    ))}
</div>

            <br></br>
            <div className="flex-center">
                <button className="button-style"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <button className="button-style"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Table;