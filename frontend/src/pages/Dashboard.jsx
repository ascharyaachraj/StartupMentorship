import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie, FaCalendarCheck, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: #f3f4f6;
        }

        .dashboard {
          padding: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .topbar h2 {
          margin: 0;
        }

        .logout-btn {
          background: #ef4444;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .card h3 {
          margin-top: 0;
          color: #4f46e5;
        }

        .icon {
          font-size: 2.5rem;
          color: #6366f1;
          margin-bottom: 10px;
        }

        .action-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 16px;
          background: #4f46e5;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        }

        .welcome {
          margin-bottom: 30px;
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white;
          padding: 30px;
          border-radius: 16px;
        }
      `}</style>

      <div className="dashboard">
        {/* Top bar */}
        <div className="topbar">
          <h2>Dashboard</h2>
          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Welcome */}
        <div className="welcome">
          <h1>Welcome, {user?.name || "User"} 👋</h1>
          <p>Here’s what’s happening with your mentorship journey.</p>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <div className="icon"><FaUserTie /></div>
            <h3>Your Mentors</h3>
            <p>You are connected with 2 mentors.</p>
            <Link to="/mentors" className="action-btn">
              View Mentors
            </Link>
          </div>

          <div className="card">
            <div className="icon"><FaCalendarCheck /></div>
            <h3>Upcoming Sessions</h3>
            <p>No sessions scheduled yet.</p>
            <Link to="/mentors" className="action-btn">
              Book Session
            </Link>
          </div>

          <div className="card">
            <div className="icon"><FaMoneyBillWave /></div>
            <h3>Payments</h3>
            <p>Total spent: ₹0</p>
            <Link to="#" className="action-btn">
              View Payments
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
