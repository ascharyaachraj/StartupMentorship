import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // later connect backend
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        .auth {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
        }
        .card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
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
          background: #4f46e5;
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
          <h2>Login</h2>
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
          <button type="submit">Login</button>
          <div className="link">
            New here? <Link to="/register">Create account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
