import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const navigate = useNavigate();

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (password !== password2) {
            console.error("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registration successful:", data.message);
                navigate('/');  // Redirect to the login page after successful registration.

            } else {
                console.error("Registration failed:", data.message);
            }
        } catch (err) {
            console.error("An error occurred during registration:", err);
        }
    }


    return (
        <section>
            <div className="heading">
                <h1>
                    Sign Up
                </h1>
            </div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange}
                        />
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signup;
