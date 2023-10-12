import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    },[])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

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

    async function signUp() {
        let item = { name, password, email };
       

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
    }

    return (
        <>
        <Header />

        <div>
            <h1>Register Page</h1>
            <div style={containerStyle}>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    placeholder="name"
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
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    placeholder="email"
                />
                <br />
                <button onClick={signUp} className="btn btn-primary">
                    Sign up
                </button>
            </div>
        </div>
        </>
       
    );
}

export default Register;
