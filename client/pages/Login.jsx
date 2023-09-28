import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;

    const navigate = useNavigate();

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const loginUser = async (email, password) => {
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.status === 200) {
                navigate('/home');
            } else {
                setError(data.message || 'An error occurred. Please try again.');
            }

        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        loginUser(email, password);
    };

    return (
        <section>
            <div className="heading">
                <h1>Sign In</h1>
            </div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Login</button>
                    </div>
                </form>
                {error && <div id="error-message">{error}</div>}
            </div>
        </section>
    );
}

export default Login;
