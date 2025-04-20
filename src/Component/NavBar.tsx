import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
const NavBar = () => {


    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        console.log(localStorage.getItem("name"))
        navigate("/login");
    }
    return (
        <nav>
            <div className="left-side d-flex ">
                <span className="mobile-nav "><FiAlignLeft /></span>
                <Link to={"/"} className="custom-link" ><span>Pdf Management</span></Link>
            </div>
            <div className="center">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search..." />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="right-side text-center g-20">
                <Link to={"/add-property"} className="custom-link" ><span>Upload Pdf</span></Link>
                <Link to={"/"} className="custom-link" ><span>View Pdf</span></Link>
                <span style={{cursor:"pointer"}} onClick={logout}>Log Out</span>
            </div>

        </nav>
    )
}
export default NavBar;