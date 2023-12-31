import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {

    
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        console.log(localStorage.getItem("name"))
        navigate("/login");
    }
    return (
        <nav>
            <div className="left-side">
                <Link to={"/"} className="custom-link" ><span>RoomRent</span></Link>
            </div>
            <div className="center">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search..." />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="right-side">
                <span onClick={logout}>{localStorage.getItem("name")}</span>
            </div>

        </nav>
    )
}
export default NavBar;