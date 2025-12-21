import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // later connect backend
    navigate("/login");
  };

  return (
    <>
      <style>{`
        .auth {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef2ff;
        }
        .card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
        }
        button {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: #6366f1;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .link {
          text-align: center;
          margin-top: 15px;
        }
      `}</style>

      <div className="auth">
        <form className="card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          <div className="link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
