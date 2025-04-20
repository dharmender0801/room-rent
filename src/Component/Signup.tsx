import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APICALL } from "../API-COM/ApiCall"; // assuming this has a signup method too
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        APICALL.Signup(form)
            .then(res => {
                toast.success("Signup successful! Please login.");
                navigate("/login");
            })
            .catch(err => {
                console.error(err);
                toast.error("User Already Exist ");
            });
    };

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        name="firstName" required />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        name="lastName" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        value={form.email}
                        onChange={handleChange}
                        id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        value={form.password}
                        onChange={handleChange}
                        id="password" name="password" required />
                </div>
                <div className="d-flex g-20">
                    <button onClick={handleSubmit} type="submit">Register</button>
                    <Link to={"/login"} className="custom-link" > <button type="submit">Login</button></Link>
                </div>
            </form>

        </div>

    );
};

export default Signup;
