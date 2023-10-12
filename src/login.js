import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "500px",
        margin: "0 auto",
    };

    const inputStyle = {
        marginBottom: "10px",
    };


    async function login() {
        console.warn(email,password)
        let item ={email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers : {
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }


    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [])
    return (
        <>
            <Header />
            <div>
                <h1>
                    login Page
                </h1>
                <div style={containerStyle}>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    placeholder="email"
                />
                <br />
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    placeholder="password"
                />
                <br />
              
                <button onClick = {login} className="btn btn-primary">
                    Login
                </button>
            </div>
            </div>
        </>

    )
}

export default Login