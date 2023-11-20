import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const DefaultLayout = () => {
    const navigate = useNavigate();
    useEffect(()=>
    {
        if (localStorage.getItem("token") === null) {
            navigate("/login");
        }
    },[])
    
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
export default DefaultLayout;