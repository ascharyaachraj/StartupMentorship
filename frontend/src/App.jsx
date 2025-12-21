import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MentorsPage from "./pages/MentorsPage";
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/BookingPage";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  const handleChatbotToggle = () => {
    console.log("Chatbot toggled");
    // Add your chatbot toggle logic here
  };

  return (
    <BrowserRouter>
      <Navbar onChatbotToggle={handleChatbotToggle} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* New Booking Routes */}
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        
        {/* Additional routes for future implementation */}
        {/* <Route path="/mentor/:id" element={<MentorProfilePage />} />
        <Route path="/matching" element={<AIMatchingPage />} /> */}
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;