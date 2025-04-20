import React, { useState } from "react";
import { APICALL } from "../API-COM/ApiCall"; // assuming you have an API call for password reset
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "USER",
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userId");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        APICALL.ResetPassword(form)
            .then((res) => {
                setMessage("Password reset link sent to your email!");
                toast.success("Password reset link sent to your email!");
                setTimeout(() => navigate("/login"), 3000);
            })
            .catch((err) => {
                console.error(err);
                setMessage("Error sending reset link. Try again.");
            });
    };


    const handleSetNewPassword = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        if (!userId) {
            toast.error("Invalid reset link.");
            return;
        }
        const payload = { ...form, userId };
        APICALL.updatePassword(payload)
            .then((res) => {
                toast.success("Password updated successfully!");
                setTimeout(() => navigate("/login"), 2000);
            })
            .catch((err) => {
                console.error(err);
                setMessage("Failed to reset password.");
            });
    };


    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={userId ? handleSetNewPassword : handleSubmit}>
                <h2>{userId ? "Set New Password" : "Reset Password"}</h2>
                {!userId ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div className="input-group">
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Reset Password</button>
                    </>
                )}
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default ResetPassword;
