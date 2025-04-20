import React, { useState } from "react";
import { APICALL } from "../API-COM/ApiCall";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pw, setPw] = useState('');
    const subMit = (e: any) => {
        e.preventDefault();
        APICALL.Login({
            username: user,
            password: pw
        }).then((res) => {
            localStorage.setItem("username", user);
            localStorage.setItem("pw", pw);
            localStorage.setItem("name", res.data.firstName);
            localStorage.setItem("token", res.data.token)
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })

    }
    const username = (e: any) => {
        setUser(e.target.value)
    }
    const password = (e: any) => {
        setPw(e.target.value);
    }
    return (
        <>
            <div className="login-container">
                <form id="loginForm" className="login-form gap-20-btm text-center">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={username} type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={password} type="password" id="password" name="password" required />
                    </div>
                    <button onClick={subMit} type="submit">Login</button>
                    <Link to={"/sign-up"} className="custom-link" ><span>Sign Up</span></Link>
                    <Link to={"/reset-password"} className="custom-link"><span>Forgot Password?</span></Link>
                </form>
            </div >

        </>
    )
}
export default Login;