import { useState } from "react";
import "./login.css";

import pkg from "../../package.json";

export default function LoginPage() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const API = `http://localhost:9095/service/response`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(API, {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const text = await response.text();
            console.log("Response:", text);
        } catch (error) {
            console.error("Request failed:", error);
        }
    };


    return (
        <div className="login-container">
            <div className="login-card">

                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Sign in to your account</p>

                <form onSubmit={handleSubmit} className="login-form">

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button className="login-btn" type="submit">
                        Login
                    </button>

                </form>

                <span  className="version-span">vresion : {pkg.version}</span>

            </div>
        </div>
    );
}
