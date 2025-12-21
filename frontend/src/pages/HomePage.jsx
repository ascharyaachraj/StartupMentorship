import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Box,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Avatar,
  AvatarGroup
} from "@mui/material";
import {
  Rocket,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Target,
  Zap,
  Sparkles,
  ArrowUpRight,
  Star,
  Shield,
  Calendar,
  X as XIcon,
  ChevronRight,
  PlayCircle,
  Quote
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearnMoreDialog from "./LearnMoreDialog";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDialog, setOpenDialog] = useState(null);

  const stats = [
    { 
      value: "92%", 
      label: "Higher survival rate", 
      icon: <Target size={24} />, 
      color: "#10B981",
      description: "Startups with mentors succeed more often"
    },
    { 
      value: "3.5x", 
      label: "Revenue growth", 
      icon: <TrendingUp size={24} />, 
      color: "#3B82F6",
      description: "Faster growth compared to non-mentored peers"
    },
    { 
      value: "98%", 
      label: "Positive impact", 
      icon: <CheckCircle size={24} />, 
      color: "#8B5CF6",
      description: "Founders report significant improvement"
    }
  ];

  const features = [
    {
      id: "mentors",
      title: "700+ Expert Mentors",
      description: "Access mentors across tech, growth, product & leadership.",
      icon: <Users size={28} />,
      color: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
      quickStats: [
        { value: "15+", label: "Years avg. experience" },
        { value: "95%", label: "Success rate" }
      ]
    },
    {
      id: "ai-matching",
      title: "AI-Powered Matching",
      description: "Get matched with mentors who've solved your exact problems.",
      icon: <Zap size={28} />,
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #F59E0B)",
      quickStats: [
        { value: "10x", label: "Better matching" },
        { value: "94%", label: "Accuracy" }
      ]
    },
    {
      id: "sessions",
      title: "1:1 Sessions",
      description: "Focused, actionable sessions tailored to your goals.",
      icon: <MessageSquare size={28} />,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #3B82F6)",
      quickStats: [
        { value: "60min", label: "Session length" },
        { value: "4.9/5", label: "Rating" }
      ]
    }
  ];

  // Background image URL - replace with your actual image URL
  const backgroundImageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      {/* ================= HERO SECTION ================= */}
      <Container maxWidth="xl" sx={{ 
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Chip
                  icon={<Sparkles size={16} />}
                  label="Trusted by 10,000+ startups"
                  sx={{
                    background: "linear-gradient(45deg, #EC4899, #8B5CF6)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    py: 1,
                    px: 2
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4rem" },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: "#111827",
                  letterSpacing: "-0.02em"
                }}
              >
                Your next breakthrough is one conversation away
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.125rem", md: "1.375rem" },
                  lineHeight: 1.7,
                  maxWidth: "90%",
                  fontWeight: 400
                }}
              >
                Connect with mentors who've already solved the problems you're facing. 
                Get clarity, not theory. Accelerate your growth with proven guidance.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={20} />}
                  onClick={() => navigate("/mentors")}
                  sx={{
                    px: 5,
                    py: 1.75,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                    borderRadius: "14px",
                    textTransform: "none",
                    boxShadow: "0 12px 24px rgba(99, 102, 241, 0.25)",
                    "&:hover": {
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.35)",
                      transform: "translateY(-3px)"
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  Find Your Mentor
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    document.getElementById("features")?.scrollIntoView({ 
                      behavior: "smooth",
                      block: "start"
                    });
                  }}
                  sx={{
                    px: 5,
                    py: 1.75,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderColor: "#E5E7EB",
                    color: "#6366F1",
                    borderRadius: "14px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#6366F1",
                      background: "rgba(99, 102, 241, 0.04)",
                      transform: "translateY(-3px)"
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  How it works
                </Button>
              </Stack>

              <Stack direction="row" spacing={4} sx={{ mt: 2, flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle size={18} color="#10B981" />
                  <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                    No setup fees
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle size={18} color="#10B981" />
                  <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                    14-day free trial
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle size={18} color="#10B981" />
                  <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                    Cancel anytime
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: { xs: 320, sm: 400, md: 480 },
                  height: { xs: 320, sm: 400, md: 480 },
                  borderRadius: "28px",
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.3)"
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 3,
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: "50%", 
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.3)"
                  }}>
                    <Rocket size={isMobile ? 40 : 50} color="#fff" />
                  </Box>
                  <Box sx={{ textAlign: "center", px: 4 }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 800,
                        mb: 1
                      }}
                    >
                      Startup Mentoring
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        lineHeight: 1.6
                      }}
                    >
                      Expert guidance for ambitious founders
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Floating elements */}
              <Box sx={{ 
                position: "absolute", 
                top: 40, 
                right: 40, 
                background: "white", 
                p: 2, 
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                display: { xs: "none", lg: "block" }
              }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "#10B981", width: 32, height: 32 }}>S</Avatar>
                    <Avatar sx={{ bgcolor: "#3B82F6", width: 32, height: 32 }}>M</Avatar>
                    <Avatar sx={{ bgcolor: "#8B5CF6", width: 32, height: 32 }}>J</Avatar>
                  </AvatarGroup>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      50+ sessions today
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box sx={{ 
                position: "absolute", 
                bottom: 60, 
                left: 20, 
                background: "white", 
                p: 2, 
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                display: { xs: "none", lg: "block" }
              }}>
                <Stack spacing={0.5}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#111827" }}>
                    ⭐ 4.9/5 Rating
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    From 2,500+ reviews
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ================= STATS SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: "20px",
                  border: "1px solid #F3F4F6",
                  background: "white",
                  transition: "all 0.4s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)",
                    borderColor: stat.color
                  }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    borderRadius: "16px",
                    background: `${stat.color}15`,
                    mb: 3
                  }}
                >
                  <Box sx={{ color: stat.color }}>
                    {stat.icon}
                  </Box>
                </Box>
                
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "3rem", md: "3.5rem" },
                    color: "#111827",
                    mb: 1,
                    lineHeight: 1
                  }}
                >
                  {stat.value}
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#111827",
                    mb: 1
                  }}
                >
                  {stat.label}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 200
                  }}
                >
                  {stat.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= FEATURES SECTION ================= */}
      <Box 
        id="features"
        sx={{ 
          py: { xs: 10, md: 14 },
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          position: "relative"
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
            <Chip
              label="Powerful Features"
              icon={<Sparkles size={16} />}
              sx={{
                background: "linear-gradient(45deg, #10B981, #3B82F6)",
                color: "white",
                fontWeight: 700,
                fontSize: "0.875rem",
                py: 1,
                px: 2
              }}
            />
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#111827",
                maxWidth: 800,
                lineHeight: 1.1
              }}
            >
              Everything you need to accelerate your growth
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              We focus on execution, not motivation. Get the guidance you need to turn ideas into reality.
            </Typography>
          </Stack>

          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={feature.id}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    border: "1px solid #F3F4F6",
                    background: "white",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.12)"
                    }
                  }}
                >
                  {/* Top accent */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: feature.gradient,
                      borderRadius: "24px 24px 0 0"
                    }}
                  />
                  
                  <Stack spacing={4} sx={{ position: "relative", zIndex: 1, pt: 2 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: "20px",
                        background: feature.gradient,
                        boxShadow: `0 15px 30px ${feature.color}40`
                      }}
                    >
                      <Box sx={{ color: "white" }}>
                        {React.cloneElement(feature.icon, { size: 36 })}
                      </Box>
                    </Box>
                    
                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: "1.75rem",
                        lineHeight: 1.2
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    {/* Description */}
                    <Typography
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "1.1rem"
                      }}
                    >
                      {feature.description}
                    </Typography>
                    
                    {/* Quick Stats */}
                    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                      {feature.quickStats.map((stat, idx) => (
                        <Box key={idx}>
                          <Typography variant="h4" sx={{ fontWeight: 900, color: feature.color }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Learn More Button */}
                    <Button
                      endIcon={<ArrowUpRight size={20} />}
                      onClick={() => setOpenDialog(feature.id)}
                      sx={{
                        alignSelf: "flex-start",
                        color: feature.color,
                        fontWeight: 700,
                        fontSize: "1rem",
                        textTransform: "none",
                        px: 0,
                        py: 1,
                        "&:hover": {
                          background: "transparent",
                          "& .MuiButton-endIcon": {
                            transform: "translate(4px, -4px)"
                          }
                        },
                        "& .MuiButton-endIcon": {
                          transition: "transform 0.3s ease"
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Success Stories Section (Replacement for Testimonials) */}
          <Box sx={{ mt: 12 }}>
            <Stack spacing={3} alignItems="center" sx={{ mb: 8, textAlign: "center" }}>
              <Chip
                label="Success Stories"
                icon={<Sparkles size={16} />}
                sx={{
                  background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  py: 1,
                  px: 2
                }}
              />
              
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  color: "#111827",
                  maxWidth: 800,
                  lineHeight: 1.1
                }}
              >
                See how mentors helped startups succeed
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  maxWidth: 600,
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  lineHeight: 1.7,
                  fontWeight: 400
                }}
              >
                Real results from founders who found their breakthrough with GrowthConnect.
              </Typography>
            </Stack>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ 
                  p: 5, 
                  borderRadius: "24px", 
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                  color: "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <Box>
                    <Typography sx={{ 
                      fontSize: "1.5rem", 
                      fontWeight: 700, 
                      mb: 3,
                      lineHeight: 1.3
                    }}>
                      "GrowthConnect helped us secure Series B funding. Our mentor's insights were invaluable."
                    </Typography>
                    
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ 
                        bgcolor: "white", 
                        color: "#6366F1",
                        fontWeight: 700,
                        width: 60,
                        height: 60
                      }}>
                        AJ
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 800, fontSize: "1.25rem" }}>
                          Alex Johnson
                        </Typography>
                        <Typography sx={{ opacity: 0.9 }}>
                          Founder, CloudScale
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  
                  <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    <Typography sx={{ fontSize: "0.875rem", opacity: 0.9 }}>
                      Raised $15M in Series B funding after 6 months of mentorship
                    </Typography>
                  </Box>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Grid container spacing={4} direction="column">
                  <Grid item xs={12}>
                    <Card sx={{ 
                      p: 4, 
                      borderRadius: "20px", 
                      border: "1px solid #F3F4F6",
                      background: "white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }
                    }}>
                      <Typography sx={{ 
                        fontSize: "1.25rem", 
                        fontWeight: 600, 
                        mb: 2,
                        color: "#111827",
                        lineHeight: 1.4
                      }}>
                        "Went from 10K to 100K MRR in 6 months with guidance from our growth mentor."
                      </Typography>
                      
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: "#10B981", 
                          fontWeight: 700,
                          width: 50,
                          height: 50
                        }}>
                          DK
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                            David Kim
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            CEO, MarketBoost
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Card sx={{ 
                      p: 4, 
                      borderRadius: "20px", 
                      border: "1px solid #F3F4F6",
                      background: "white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }
                    }}>
                      <Typography sx={{ 
                        fontSize: "1.25rem", 
                        fontWeight: 600, 
                        mb: 2,
                        color: "#111827",
                        lineHeight: 1.4
                      }}>
                        "The technical mentorship saved us from critical architecture mistakes early on."
                      </Typography>
                      
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: "#EC4899", 
                          fontWeight: 700,
                          width: 50,
                          height: 50
                        }}>
                          PS
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                            Priya Sharma
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            CTO, DataMind
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ================= CTA SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            borderRadius: "32px",
            p: { xs: 4, md: 8 },
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={5} alignItems="center">
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1
                }}
              >
                Ready to accelerate your growth?
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  opacity: 0.9,
                  fontSize: { xs: "1.125rem", md: "1.5rem" },
                  maxWidth: 700,
                  lineHeight: 1.7,
                  fontWeight: 400
                }}
              >
                Get guidance from people who've already done it. 
                Join 10,000+ founders who found their breakthrough with GrowthConnect.
              </Typography>
              
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/register")}
                  sx={{
                    background: "white",
                    color: "#6366F1",
                    px: 6,
                    py: 2,
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    borderRadius: "16px",
                    textTransform: "none",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      background: "#F9FAFB",
                      transform: "translateY(-3px)",
                      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
                    },
                    transition: "all 0.3s"
                  }}
                >
                  Start Free Trial
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate("/mentors")}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    color: "white",
                    px: 6,
                    py: 2,
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    borderRadius: "16px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "white",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-3px)"
                    },
                    transition: "all 0.3s"
                  }}
                >
                  Browse Mentors
                </Button>
              </Stack>
              
              <Stack direction="row" spacing={4} sx={{ mt: 2, flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Shield size={18} color="rgba(255, 255, 255, 0.8)" />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    No credit card required
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Calendar size={18} color="rgba(255, 255, 255, 0.8)" />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    14-day free trial
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <XIcon size={18} color="rgba(255, 255, 255, 0.8)" />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Cancel anytime
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Container>

      {/* ================= LEARN MORE DIALOG ================= */}
      <LearnMoreDialog 
        openDialog={openDialog} 
        setOpenDialog={setOpenDialog} 
        navigate={navigate}
      />
    </Box>
  );
};

export default HomePage;