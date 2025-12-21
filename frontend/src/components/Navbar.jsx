import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem
} from "@mui/material";

import {
  Menu as MenuIcon,
  MessageCircle,
  Rocket,
  User,
  LogOut,
  LayoutDashboard
} from "lucide-react";

import { motion } from "framer-motion";

const Navbar = ({ onChatbotToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Rocket size={32} color="#FFF" />
            </motion.div>

            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                fontWeight: 800,
                textDecoration: "none",
                background: "linear-gradient(45deg, #FFF, #E0E7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px"
              }}
            >
              GrowthConnect
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            <Button component={Link} to="/" sx={navBtn}>
              Home
            </Button>

            <Button component={Link} to="/mentors" sx={navBtn}>
              Mentors
            </Button>

            {!user ? (
              <>
                <Button component={Link} to="/login" sx={navBtn}>
                  Login
                </Button>

                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  startIcon={<User size={18} />}
                  sx={registerBtn}
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to={user.role === "mentor" ? "/mentor/dashboard" : "/dashboard"}
                  startIcon={<LayoutDashboard size={18} />}
                  sx={navBtn}
                >
                  Dashboard
                </Button>

                <Button
                  onClick={handleLogout}
                  startIcon={<LogOut size={18} />}
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Logout
                </Button>
              </>
            )}

            <IconButton onClick={onChatbotToggle} sx={chatBtn}>
              <MessageCircle size={22} />
            </IconButton>
          </Box>

          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>

              <MenuItem component={Link} to="/mentors" onClick={handleClose}>
                Mentors
              </MenuItem>

              {!user ? (
                <>
                  <MenuItem component={Link} to="/login" onClick={handleClose}>
                    Login
                  </MenuItem>
                  <MenuItem component={Link} to="/register" onClick={handleClose}>
                    Register
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    component={Link}
                    to={user.role === "mentor" ? "/mentor/dashboard" : "/dashboard"}
                    onClick={handleClose}
                  >
                    Dashboard
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              )}

              <MenuItem onClick={onChatbotToggle}>
                Chat Assistant
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

/* 🔹 STYLES */
const navBtn = {
  color: "white",
  fontWeight: 600,
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)"
  }
};

const registerBtn = {
  ml: 2,
  background: "linear-gradient(45deg, #EC4899, #8B5CF6)",
  fontWeight: 600,
  px: 3,
  "&:hover": {
    background: "linear-gradient(45deg, #DB2777, #7C3AED)",
    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)"
  }
};

const chatBtn = {
  background: "linear-gradient(45deg, #10B981, #34D399)",
  color: "white",
  ml: 2,
  "&:hover": {
    background: "linear-gradient(45deg, #059669, #10B981)",
    boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)"
  }
};
