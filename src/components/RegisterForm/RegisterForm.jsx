import React, { useState } from "react";
import "./RegisterForm.css";
import Card from "../Card/Card";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    // Here you can handle the form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h2 className="title">Register</h2>
        <p className="subtitle">Please enter your username and password!</p>
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="inputs_container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error_msg">{error}</p>}
          <button type="submit" className="register_button">
            Register
          </button>
        </form>
        <div className="link_container">
          <p className="small"><a href="/login">Dont have an account? Login</a></p>
        </div>
        <div className="home-back">
          <a href="/" className="small">Home</a>
        </div>
      </Card>
    </div>
  );
};

export default RegisterForm;