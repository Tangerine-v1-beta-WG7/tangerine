import React, { useEffect, useState } from "react";

import Card from "./Card.jsx";

const Dashboard = () => {

    const [totalEmployees, setTotalEmployees] = useState(0);
    const [totalFulltime, setTotalFulltime] = useState(0);
    const [totalContractors, setTotalContractors] = useState(0);

    useEffect(() => {
        fetch("/api/table")
            .then(response => response.json())
            .then(data => {

                setTotalEmployees(data.length);

                setTotalFulltime(
                    data.filter(employee =>
                        employee.type === "full-time"
                    ).length);

                setTotalContractors(
                    data.filter(employee =>
                        employee.type === "contractor"
                    ).length);
            });
    }, []);

    return (
        <>
            <div className="card-container">
                <Card title='Total Employee Count' amount={totalEmployees} />
                <Card title='Full Time Employees' amount={totalFulltime} />
                <Card title='Contractors' amount={totalContractors} />
            </div>
        </>
    )
}

export default Dashboard;