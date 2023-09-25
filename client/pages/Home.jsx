import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import Dashboard from "../components/Dashboard.jsx";
import Table from "../components/Table.jsx";

const Home = () => {

    return (
        <>
            <Header />
            <Dashboard />
            <Table />
        </>
    )
}

export default Home;