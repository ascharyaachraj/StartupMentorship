import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Chip,
  Divider,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  CircularProgress,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Calendar,
  Clock,
  DollarSign,
  CreditCard,
  CheckCircle,
  Shield,
  Lock,
  ArrowLeft,
  ArrowRight,
  X,
  MapPin,
  Video,
  MessageSquare,
  User,
  CreditCard as CreditCardIcon,
  // REMOVE: Paypal, Apple, Google
  Sparkles,
  Zap,
  AlertCircle,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  UserCheck,
  // Add these alternative icons
  Smartphone,
  Globe,
  Mail
} from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    mentorId: id,
    sessionType: "",
    date: null,
    time: null,
    duration: 60,
    notes: "",
    paymentMethod: "card",
    cardDetails: {
      number: "",
      expiry: "",
      cvc: "",
      name: ""
    }
  });
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);

  // Mock mentor data (in real app, fetch from API)
  const mentor = {
    id: id || "1",
    name: "Alex Chen",
    title: "Ex-Google PM, 3x Founder",
    avatar: "AC",
    price: 199,
    categories: ["tech", "product"],
    expertise: ["Product Strategy", "AI/ML", "Scaling Teams"],
    rating: 4.9,
    reviews: 128
  };

  // Session types
  const sessionTypes = [
    {
      id: "strategy",
      title: "Strategy Session",
      duration: 60,
      price: mentor.price,
      description: "Deep dive into business strategy and growth planning",
      icon: <UserCheck size={24} />
    },
    {
      id: "technical",
      title: "Technical Review",
      duration: 45,
      price: mentor.price * 0.75,
      description: "Code review, architecture, and technical decisions",
      icon: <Zap size={24} />
    },
    {
      id: "career",
      title: "Career Coaching",
      duration: 60,
      price: mentor.price,
      description: "Career growth, leadership development, and advancement",
      icon: <User size={24} />
    },
    {
      id: "pitch",
      title: "Pitch Practice",
      duration: 45,
      price: mentor.price * 0.75,
      description: "Investor pitch practice and fundraising strategy",
      icon: <MessageSquare size={24} />
    }
  ];

  // Payment methods
  // Update payment methods to use available icons
const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: <CreditCardIcon size={20} /> },
  { id: "paypal", name: "PayPal", icon: <Globe size={20} /> }, // Changed from Paypal
  { id: "apple", name: "Apple Pay", icon: <Smartphone size={20} /> }, // Changed from Apple
  { id: "google", name: "Google Pay", icon: <Mail size={20} /> } // Changed from Google
];
  // Steps
  const steps = ["Session Details", "Schedule Time", "Payment", "Confirmation"];

  // Handle form changes
  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCardChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      cardDetails: {
        ...prev.cardDetails,
        [field]: value
      }
    }));
  };

  // Generate available time slots
  useEffect(() => {
    if (bookingData.date) {
      const slots = [];
      const startHour = 9; // 9 AM
      const endHour = 18; // 6 PM
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute of [0, 30]) {
          slots.push({
            time: dayjs(bookingData.date).hour(hour).minute(minute),
            available: Math.random() > 0.3 // Mock availability
          });
        }
      }
      setAvailableSlots(slots);
    }
  }, [bookingData.date]);

  // Handle booking submission
  const handleSubmitBooking = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setActiveStep(3);
      setShowPaymentSuccess(true);
    }, 2000);
  };

  // Handle next step
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmitBooking();
    } else {
      setActiveStep(prev => prev + 1);
    }
  };

  // Handle back step
  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  // Calculate total price
  const selectedSession = sessionTypes.find(s => s.id === bookingData.sessionType);
  const totalPrice = selectedSession ? selectedSession.price : 0;
  const tax = totalPrice * 0.1; // 10% tax
  const platformFee = 9.99;
  const finalTotal = totalPrice + tax + platformFee;

  // Render step content
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#111827" }}>
              Select Session Type
            </Typography>
            
            <Grid container spacing={2}>
              {sessionTypes.map((session) => (
                <Grid item xs={12} sm={6} key={session.id}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      border: bookingData.sessionType === session.id ? "2px solid #6366F1" : "1px solid #E5E7EB",
                      background: bookingData.sessionType === session.id ? "#EEF2FF" : "white",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      "&:hover": {
                        borderColor: "#6366F1",
                        transform: "translateY(-2px)"
                      }
                    }}
                    onClick={() => handleInputChange("sessionType", session.id)}
                  >
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box sx={{ color: "#6366F1" }}>
                            {session.icon}
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {session.title}
                          </Typography>
                        </Box>
                        {bookingData.sessionType === session.id && (
                          <CheckCircle size={20} color="#10B981" />
                        )}
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {session.description}
                      </Typography>
                      
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Chip 
                          label={`${session.duration} min`}
                          size="small"
                          sx={{ background: "#F3F4F6", fontWeight: 600 }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 800, color: "#111827" }}>
                          ${session.price}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {bookingData.sessionType && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                  Additional Notes (Optional)
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell your mentor what you'd like to focus on..."
                  value={bookingData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px"
                    }
                  }}
                />
              </Box>
            )}
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#111827" }}>
              Select Date & Time
            </Typography>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Choose Date
                    </Typography>
                    <DatePicker
                      value={bookingData.date}
                      onChange={(newValue) => handleInputChange("date", newValue)}
                      minDate={dayjs()}
                      maxDate={dayjs().add(30, 'day')}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: { 
                            "& .MuiOutlinedInput-root": { 
                              borderRadius: "12px",
                              height: "56px"
                            }
                          }
                        }
                      }}
                    />
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Session Duration
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        value={bookingData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                        sx={{ 
                          borderRadius: "12px",
                          height: "56px"
                        }}
                      >
                        <MenuItem value={30}>30 minutes</MenuItem>
                        <MenuItem value={45}>45 minutes</MenuItem>
                        <MenuItem value={60}>60 minutes</MenuItem>
                        <MenuItem value={90}>90 minutes</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              
              {bookingData.date && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                    Available Time Slots
                  </Typography>
                  <Grid container spacing={1}>
                    {availableSlots.map((slot, index) => (
                      <Grid item xs={6} sm={4} md={3} key={index}>
                        <Button
                          fullWidth
                          variant={bookingData.time?.format("HH:mm") === slot.time.format("HH:mm") ? "contained" : "outlined"}
                          onClick={() => handleInputChange("time", slot.time)}
                          disabled={!slot.available}
                          sx={{
                            py: 1.5,
                            borderRadius: "8px",
                            borderColor: "#E5E7EB",
                            color: slot.available ? "#111827" : "#9CA3AF",
                            "&.Mui-disabled": {
                              borderColor: "#F3F4F6",
                              background: "#F9FAFB"
                            }
                          }}
                        >
                          {slot.time.format("h:mm A")}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </LocalizationProvider>
            
            <Alert severity="info" sx={{ mt: 4, borderRadius: "12px" }}>
              <Typography variant="body2">
                All times are displayed in your local timezone. Your mentor will receive a calendar invite.
              </Typography>
            </Alert>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#111827" }}>
              Payment Details
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Stack spacing={3}>
                  {/* Payment Method Selection */}
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Payment Method
                    </Typography>
                    <RadioGroup
                      value={bookingData.paymentMethod}
                      onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    >
                      <Stack spacing={2}>
                        {paymentMethods.map((method) => (
                          <Card
                            key={method.id}
                            sx={{
                              p: 2,
                              borderRadius: "12px",
                              border: bookingData.paymentMethod === method.id ? "2px solid #6366F1" : "1px solid #E5E7EB",
                              background: bookingData.paymentMethod === method.id ? "#EEF2FF" : "white",
                              cursor: "pointer"
                            }}
                            onClick={() => handleInputChange("paymentMethod", method.id)}
                          >
                            <FormControlLabel
                              value={method.id}
                              control={<Radio />}
                              label={
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 1 }}>
                                  {method.icon}
                                  <Typography sx={{ fontWeight: 600 }}>
                                    {method.name}
                                  </Typography>
                                </Box>
                              }
                              sx={{ width: "100%", m: 0 }}
                            />
                          </Card>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </Box>
                  
                  {/* Card Details Form */}
                  {bookingData.paymentMethod === "card" && (
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                        Card Details
                      </Typography>
                      <Stack spacing={2}>
                        <TextField
                          fullWidth
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          value={bookingData.cardDetails.number}
                          onChange={(e) => handleCardChange("number", e.target.value)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CreditCardIcon size={20} color="#6B7280" />
                              </InputAdornment>
                            )
                          }}
                          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                        />
                        
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Expiry Date"
                              placeholder="MM/YY"
                              value={bookingData.cardDetails.expiry}
                              onChange={(e) => handleCardChange("expiry", e.target.value)}
                              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="CVC"
                              placeholder="123"
                              value={bookingData.cardDetails.cvc}
                              onChange={(e) => handleCardChange("cvc", e.target.value)}
                              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                            />
                          </Grid>
                        </Grid>
                        
                        <TextField
                          fullWidth
                          label="Name on Card"
                          placeholder="John Doe"
                          value={bookingData.cardDetails.name}
                          onChange={(e) => handleCardChange("name", e.target.value)}
                          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                        />
                      </Stack>
                    </Box>
                  )}
                  
                  {/* Security Info */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, background: "#F9FAFB", borderRadius: "12px" }}>
                    <Shield size={20} color="#10B981" />
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Your payment is secured with 256-bit SSL encryption
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 3, borderRadius: "16px", position: "sticky", top: 100 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#111827" }}>
                    Booking Summary
                  </Typography>
                  
                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Session with {mentor.name}</Typography>
                      <Typography sx={{ fontWeight: 600 }}>${totalPrice.toFixed(2)}</Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Platform fee</Typography>
                      <Typography sx={{ fontWeight: 600 }}>${platformFee.toFixed(2)}</Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Tax (10%)</Typography>
                      <Typography sx={{ fontWeight: 600 }}>${tax.toFixed(2)}</Typography>
                    </Box>
                    
                    <Divider sx={{ my: 1 }} />
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "#111827" }}>Total</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: "#111827" }}>
                        ${finalTotal.toFixed(2)}
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                    <Lock size={16} color="#6B7280" />
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      You won't be charged until the mentor confirms the session
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "40px",
                background: "linear-gradient(135deg, #10B981, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3
              }}
            >
              <CheckCircle size={40} color="white" />
            </Box>
            
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: "#111827" }}>
              Booking Confirmed! 🎉
            </Typography>
            
            <Typography sx={{ color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto" }}>
              Your session with {mentor.name} has been scheduled successfully. 
              You'll receive a confirmation email with all the details.
            </Typography>
            
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 3, borderRadius: "12px" }}>
                  <Stack spacing={2} alignItems="center">
                    <Calendar size={24} color="#6366F1" />
                    <Box>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>Date</Typography>
                      <Typography sx={{ fontWeight: 700 }}>
                        {bookingData.date?.format("MMMM D, YYYY") || "Not set"}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 3, borderRadius: "12px" }}>
                  <Stack spacing={2} alignItems="center">
                    <Clock size={24} color="#6366F1" />
                    <Box>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>Time</Typography>
                      <Typography sx={{ fontWeight: 700 }}>
                        {bookingData.time?.format("h:mm A") || "Not set"}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 3, borderRadius: "12px" }}>
                  <Stack spacing={2} alignItems="center">
                    <DollarSign size={24} color="#6366F1" />
                    <Box>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>Amount Paid</Typography>
                      <Typography sx={{ fontWeight: 700 }}>
                        ${finalTotal.toFixed(2)}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
            
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard")}
                sx={{
                  background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: "12px"
                }}
              >
                Go to Dashboard
              </Button>
              
              <Button
                variant="outlined"
                onClick={() => navigate(`/mentors/${mentor.id}`)}
                sx={{
                  borderColor: "#E5E7EB",
                  color: "#111827",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "12px"
                }}
              >
                View Mentor Profile
              </Button>
            </Stack>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <Box sx={{ 
        background: "white",
        borderBottom: "1px solid #F3F4F6",
        py: 3
      }}>
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowLeft size={20} />}
            onClick={() => navigate(`/mentors/${mentor.id}`)}
            sx={{
              color: "#6366F1",
              fontWeight: 600
            }}
          >
            Back to Mentor
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Mentor Info Card */}
        <Card sx={{ p: 3, borderRadius: "16px", mb: 4, background: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)" }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="center">
            <Avatar
              sx={{
                width: 80,
                height: 80,
                fontSize: "1.75rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)"
              }}
            >
              {mentor.avatar}
            </Avatar>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#111827", mb: 0.5 }}>
                {mentor.name}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1 }}>
                {mentor.title}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Chip 
                  label={`⭐ ${mentor.rating}`} 
                  size="small" 
                  sx={{ background: "#FEF3C7", color: "#92400E", fontWeight: 600 }}
                />
                <Chip 
                  label={`${mentor.reviews} reviews`} 
                  size="small" 
                  sx={{ background: "#EFF6FF", color: "#1E40AF", fontWeight: 600 }}
                />
              </Stack>
            </Box>
            
            <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                Session Rate
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 900, color: "#111827" }}>
                ${mentor.price}
                <Typography component="span" sx={{ color: "text.secondary", fontSize: "1rem" }}>
                  /hr
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Card>

        {/* Booking Stepper */}
        <Paper sx={{ p: 3, borderRadius: "16px", mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel={isMobile}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* Step Content */}
        <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: "16px", mb: 4 }}>
          {renderStepContent(activeStep)}
        </Card>

        {/* Navigation Buttons */}
        {activeStep < 3 && (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              startIcon={<ArrowLeft size={20} />}
              sx={{
                color: "#6B7280",
                fontWeight: 600,
                "&.Mui-disabled": {
                  color: "#D1D5DB"
                }
              }}
            >
              Back
            </Button>
            
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={
                (activeStep === 0 && !bookingData.sessionType) ||
                (activeStep === 1 && (!bookingData.date || !bookingData.time)) ||
                (activeStep === 2 && bookingData.paymentMethod === "card" && 
                 (!bookingData.cardDetails.number || !bookingData.cardDetails.expiry || 
                  !bookingData.cardDetails.cvc || !bookingData.cardDetails.name))
              }
              endIcon={activeStep === steps.length - 1 ? null : <ArrowRight size={20} />}
              sx={{
                background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                color: "white",
                px: 5,
                py: 1.5,
                fontWeight: 700,
                borderRadius: "12px",
                "&.Mui-disabled": {
                  background: "#F3F4F6",
                  color: "#9CA3AF"
                }
              }}
            >
              {isProcessing ? (
                <CircularProgress size={24} color="inherit" />
              ) : activeStep === steps.length - 1 ? (
                "Confirm Booking"
              ) : (
                "Continue"
              )}
            </Button>
          </Box>
        )}
      </Container>

      {/* Payment Success Dialog */}
      <Dialog
        open={showPaymentSuccess}
        onClose={() => setShowPaymentSuccess(false)}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "24px",
            p: 3
          }
        }}
      >
        <DialogTitle sx={{ textAlign: "center", p: 0 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "30px",
              background: "linear-gradient(135deg, #10B981, #3B82F6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2
            }}
          >
            <CheckCircle size={32} color="white" />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#111827" }}>
            Payment Successful!
          </Typography>
        </DialogTitle>
        
        <DialogContent sx={{ textAlign: "center", p: 0, py: 3 }}>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Your payment of <strong>${finalTotal.toFixed(2)}</strong> has been processed successfully. 
            A receipt has been sent to your email.
          </Typography>
          
          <Stack spacing={2} alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Shield size={18} color="#10B981" />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Payment secured with Stripe
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Sparkles size={18} color="#F59E0B" />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You earned 50 loyalty points
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        
        <DialogActions sx={{ justifyContent: "center", p: 0, pt: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              setShowPaymentSuccess(false);
              navigate("/dashboard");
            }}
            sx={{
              background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
              color: "white",
              px: 4,
              py: 1,
              fontWeight: 700,
              borderRadius: "12px"
            }}
          >
            View Booking Details
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookingPage;