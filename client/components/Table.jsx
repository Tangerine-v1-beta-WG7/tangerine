import React, { useEffect, useState } from "react";
import Info from "./Info.jsx"


const Table = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);

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
    }
    return (
        <div className="container">

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
            <div className='tableHead'>
                <span>Name</span>
                <span>Role</span>
                <span>Department</span>
                <span>Start Date</span>
                <span>Type</span>
            </div> 
            <div className="tableBody">
                {currentData.map((employee) => (
                    <div key={employee.employee_id} className="employee">
                        <div className="employee-info">
                            <span><strong>Name:</strong> {employee.name}</span>
                            <span><strong>Role:</strong> {employee.role}</span>
                            <span><strong>Department:</strong> {employee.department}</span>
                            <span><strong>Start Date:</strong> {formatDate(employee.start_date)}</span>
                            <span><strong>Type:</strong> {employee.type}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* <table>
                <thead> 
                    <tr> 
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Type</th> 
                        <th>Start Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((employee) => (
                        <tr key={employee.employee_id}>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.role}</td>
                            <td>{employee.department}</td>
                            <td>{employee.type}</td>
                            <td>{formatDate(employee.start_date)}</td>
                            <td><Info {...employee} getTableFunc={getTableFunc} /></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
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