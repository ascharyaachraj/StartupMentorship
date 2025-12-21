import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  Box,
  Stack,
  Grid,
  Chip,
  Divider
} from "@mui/material";
import {
  CheckCircle,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Share2,
  Mail,
  ArrowLeft,
  Video,
  MessageSquare,
  Shield
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // In real app, get from location state or API
  const bookingDetails = {
    id: "BK-2024-00123",
    mentor: {
      name: "Alex Chen",
      title: "Ex-Google PM, 3x Founder",
      avatar: "AC"
    },
    sessionType: "Strategy Session",
    date: "March 15, 2024",
    time: "2:00 PM - 3:00 PM",
    duration: "60 minutes",
    amount: 218.99,
    paymentId: "pi_3Nt8k2Lkd123456",
    meetingLink: "https://meet.growthconnect.com/abc123"
  };

  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      minHeight: "100vh",
      py: { xs: 4, md: 8 }
    }}>
      <Container maxWidth="md">
        <Card sx={{ 
          p: { xs: 3, md: 6 }, 
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)"
        }}>
          <Stack spacing={4} alignItems="center">
            {/* Success Icon */}
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50px",
                background: "linear-gradient(135deg, #10B981, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2
              }}
            >
              <CheckCircle size={48} color="white" />
            </Box>

            {/* Main Title */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: "#111827" }}>
                Booking Confirmed! 🎉
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1.125rem" }}>
                Your session has been scheduled successfully. Here are the details:
              </Typography>
            </Box>

            {/* Booking Details Card */}
            <Card sx={{ 
              p: 4, 
              borderRadius: "16px", 
              border: "1px solid #E5E7EB",
              width: "100%"
            }}>
              <Stack spacing={3}>
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#111827", mb: 1 }}>
                      {bookingDetails.sessionType}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      with {bookingDetails.mentor.name}
                    </Typography>
                  </Box>
                  <Chip 
                    label="Confirmed" 
                    sx={{ 
                      background: "#D1FAE5", 
                      color: "#065F46",
                      fontWeight: 700
                    }}
                  />
                </Box>

                <Divider />

                {/* Details Grid */}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: "8px", 
                          background: "#EEF2FF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <Calendar size={20} color="#6366F1" />
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>Date</Typography>
                          <Typography sx={{ fontWeight: 600 }}>{bookingDetails.date}</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: "8px", 
                          background: "#F0F9FF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <Clock size={20} color="#0EA5E9" />
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>Time</Typography>
                          <Typography sx={{ fontWeight: 600 }}>{bookingDetails.time}</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: "8px", 
                          background: "#FEF3C7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <DollarSign size={20} color="#D97706" />
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>Amount Paid</Typography>
                          <Typography sx={{ fontWeight: 600 }}>${bookingDetails.amount}</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: "8px", 
                          background: "#ECFDF5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <Shield size={20} color="#10B981" />
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>Booking ID</Typography>
                          <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                            {bookingDetails.id}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>

                {/* Meeting Link */}
                {bookingDetails.meetingLink && (
                  <Box sx={{ 
                    p: 3, 
                    background: "#F0F9FF", 
                    borderRadius: "12px",
                    border: "1px solid #BAE6FD"
                  }}>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Video size={24} color="#0EA5E9" />
                        <Typography sx={{ fontWeight: 600, color: "#111827" }}>
                          Meeting Link
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {bookingDetails.meetingLink}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => window.open(bookingDetails.meetingLink, '_blank')}
                        sx={{
                          background: "linear-gradient(45deg, #0EA5E9, #3B82F6)",
                          color: "white",
                          alignSelf: "flex-start",
                          fontWeight: 600
                        }}
                      >
                        Join Meeting
                      </Button>
                    </Stack>
                  </Box>
                )}
              </Stack>
            </Card>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
              <Button
                variant="contained"
                startIcon={<MessageSquare size={20} />}
                onClick={() => navigate("/dashboard")}
                sx={{
                  flex: 1,
                  background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                  color: "white",
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: "12px"
                }}
              >
                Go to Dashboard
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Download size={20} />}
                sx={{
                  flex: 1,
                  borderColor: "#E5E7EB",
                  color: "#111827",
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "12px"
                }}
              >
                Download Receipt
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Mail size={20} />}
                sx={{
                  flex: 1,
                  borderColor: "#E5E7EB",
                  color: "#111827",
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "12px"
                }}
              >
                Email Details
              </Button>
            </Stack>

            {/* Next Steps */}
            <Box sx={{ 
              p: 3, 
              background: "#F9FAFB", 
              borderRadius: "12px",
              width: "100%"
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                What's Next?
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: "12px", 
                    background: "#EEF2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: 0.5
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: "#6366F1" }}>1</Typography>
                  </Box>
                  <Typography sx={{ color: "text.secondary" }}>
                    You'll receive a calendar invite within 5 minutes
                  </Typography>
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: "12px", 
                    background: "#EEF2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: 0.5
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: "#6366F1" }}>2</Typography>
                  </Box>
                  <Typography sx={{ color: "text.secondary" }}>
                    Your mentor will send a preparation guide 24 hours before the session
                  </Typography>
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: "12px", 
                    background: "#EEF2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: 0.5
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: "#6366F1" }}>3</Typography>
                  </Box>
                  <Typography sx={{ color: "text.secondary" }}>
                    Join the meeting 5 minutes early to test your audio/video
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Back Button */}
            <Button
              startIcon={<ArrowLeft size={20} />}
              onClick={() => navigate("/mentors")}
              sx={{
                color: "#6366F1",
                fontWeight: 600
              }}
            >
              Browse More Mentors
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PaymentSuccess;