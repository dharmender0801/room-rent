import React, { useState } from "react";
import { APICALL } from "../API-COM/ApiCall"; // assuming you have an API call for password reset
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER"
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        APICALL.ResetPassword(form)
            .then((res) => {
                setMessage("Password reset link sent to your email!");
                setTimeout(() => navigate("/login"), 3000);
            })
            .catch((err) => {
                console.error(err);
                setMessage("Error sending reset link. Try again.");
            });
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default ResetPassword;
