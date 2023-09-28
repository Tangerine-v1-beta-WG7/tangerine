import React from "react";
import { useState } from "react";
import "../dropdown.css";
import dropdown from "../assets/dropdown.png";
import InfoItem from "./InfoItem.jsx";
// import cron from "node-cron";

const formatDate = (databaseDate) => {
    const date = new Date(databaseDate);
    return date.toISOString().split('T')[0];
}

const Info = (props) => {
    const [open, setOpen] = useState(false);

    const clickHandle = async () => {
        try{
            const res = await fetch(`/api/delete/${props.employee_id}`, {
                method: 'DELETE'
            })
            //rerenders table 
            props.getTableFunc()
        }
        catch (err) {
            console.log('error deleting employee')
        }
    }

    return (
        <div className='info-container'>
            <div className='info-trigger' onClick={()=> {setOpen(!open)}}>
                <img src={dropdown}></img>
            </div>

            <div className={`info-menu ${open? 'active' : 'inactive'}`}>
                    <ul className="box">
                        <InfoItem desc= 'Salary:'text= {props.salary}/>
                        <InfoItem desc= 'Birthday:'text= {formatDate(props.birthday)}/>
                        <InfoItem desc= 'Email:'text= {props.email}/>
                        <InfoItem desc= 'Phone Number:'text= {props.phone_number}/>
                        <div className="flex-center">
                        <button className="button-style"
                    onClick={clickHandle}>
                    Offboard
                </button>
                <button className="button-style">
                    Edit
                </button>
                </div>
                    </ul>
                </div>
            </div>
)
}

export default Info;