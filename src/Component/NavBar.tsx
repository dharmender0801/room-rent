import React from "react";
const NavBar = () => {
    return (
        <nav>
            <div className="left-side text-center">
                <span>RoomRent</span>
            </div>
            <div className="center">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search..." />
                    <i className="fas fa-search"></i> 
                </div>
            </div>
            <div className="right-side">
                <span>Profile</span>
            </div>

        </nav>
    )
}
export default NavBar;