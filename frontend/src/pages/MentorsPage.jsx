import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  Rating,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Divider,
  Badge,
  LinearProgress,
  useTheme,
  useMediaQuery,
  CardMedia,
  CardActionArea,
  CardActions,
  Slider,
  Switch,
  FormControlLabel,
  Paper
} from "@mui/material";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  MessageSquare,
  Video,
  Bookmark,
  Share2,
  Award,
  Users,
  TrendingUp,
  Zap,
  X,
  ChevronRight,
  CheckCircle,
  Globe,
  DollarSign,
  Heart,
  ExternalLink,
  Linkedin,
  Twitter,
  Mail,
  ArrowLeft,
  BookOpen,
  Target,
  BarChart3,
  Coffee,
  UserCheck,
  Clock as ClockIcon,
  DollarSign as DollarIcon,
  Filter as FilterIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentorsPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [availability, setAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedMentors, setBookmarkedMentors] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Categories", icon: <Users size={16} /> },
    { id: "tech", label: "Tech & Engineering", icon: <Zap size={16} />, count: 45 },
    { id: "product", label: "Product Management", icon: <Target size={16} />, count: 32 },
    { id: "growth", label: "Growth & Marketing", icon: <TrendingUp size={16} />, count: 28 },
    { id: "leadership", label: "Leadership", icon: <Award size={16} />, count: 24 },
    { id: "funding", label: "Fundraising", icon: <DollarSign size={16} />, count: 19 },
    { id: "sales", label: "Sales", icon: <BarChart3 size={16} />, count: 15 },
    { id: "career", label: "Career Growth", icon: <Briefcase size={16} />, count: 22 }
  ];

  // Mentors data
  const mentors = [
    {
      id: 1,
      name: "Alex Chen",
      title: "Ex-Google PM, 3x Founder",
      avatar: "AC",
      rating: 4.9,
      reviews: 128,
      price: 199,
      categories: ["tech", "product"],
      expertise: ["Product Strategy", "AI/ML", "Scaling Teams"],
      availability: "this-week",
      location: "San Francisco, CA",
      experience: "12 years",
      companies: ["Google", "Uber", "Stripe"],
      bio: "Helped 50+ startups with product-market fit and scaling. Built products used by millions.",
      sessionTypes: ["Strategy", "Technical Review", "Career"],
      responseTime: "2 hours",
      successRate: "92%",
      languages: ["English", "Mandarin"],
      isFeatured: true,
      isOnline: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Growth Marketing Expert",
      avatar: "SJ",
      rating: 4.8,
      reviews: 94,
      price: 179,
      categories: ["growth", "marketing"],
      expertise: ["User Acquisition", "Content Strategy", "SEO"],
      availability: "today",
      location: "New York, NY",
      experience: "8 years",
      companies: ["Meta", "Shopify", "Dropbox"],
      bio: "Specialized in scaling startups from 0 to 10M users. Focus on sustainable growth.",
      sessionTypes: ["Growth Audit", "Marketing Plan", "Team Training"],
      responseTime: "1 hour",
      successRate: "88%",
      languages: ["English", "Spanish"],
      isFeatured: true,
      isOnline: true
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "CTO & Tech Lead",
      avatar: "MR",
      rating: 4.9,
      reviews: 156,
      price: 249,
      categories: ["tech", "leadership"],
      expertise: ["System Architecture", "DevOps", "Team Building"],
      availability: "next-week",
      location: "Remote",
      experience: "15 years",
      companies: ["Amazon", "Microsoft", "Startup Exit"],
      bio: "Built and scaled engineering teams from 5 to 500. Focus on clean architecture and best practices.",
      sessionTypes: ["Technical Review", "Architecture", "Hiring"],
      responseTime: "4 hours",
      successRate: "95%",
      languages: ["English", "Portuguese"],
      isFeatured: false,
      isOnline: false
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "VC & Fundraising Advisor",
      avatar: "PS",
      rating: 4.7,
      reviews: 87,
      price: 299,
      categories: ["funding", "leadership"],
      expertise: ["Pitch Decks", "Term Sheets", "Investor Relations"],
      availability: "today",
      location: "London, UK",
      experience: "10 years",
      companies: ["Sequoia", "Andreessen Horowitz"],
      bio: "Helped startups raise over $500M in funding. Expert in investor negotiations.",
      sessionTypes: ["Pitch Review", "Fundraising Strategy", "Cap Table"],
      responseTime: "3 hours",
      successRate: "90%",
      languages: ["English", "Hindi"],
      isFeatured: true,
      isOnline: true
    },
    {
      id: 5,
      name: "David Kim",
      title: "Product Design Lead",
      avatar: "DK",
      rating: 4.8,
      reviews: 76,
      price: 159,
      categories: ["product", "design"],
      expertise: ["UX Research", "Design Systems", "User Testing"],
      availability: "this-week",
      location: "Austin, TX",
      experience: "7 years",
      companies: ["Apple", "Airbnb", "Figma"],
      bio: "Focus on creating delightful user experiences that drive business results.",
      sessionTypes: ["Design Critique", "UX Strategy", "Portfolio Review"],
      responseTime: "6 hours",
      successRate: "85%",
      languages: ["English", "Korean"],
      isFeatured: false,
      isOnline: true
    },
    {
      id: 6,
      name: "Emma Wilson",
      title: "Startup Operations",
      avatar: "EW",
      rating: 4.6,
      reviews: 64,
      price: 149,
      categories: ["operations", "leadership"],
      expertise: ["Process Optimization", "Hiring", "OKRs"],
      availability: "next-week",
      location: "Berlin, Germany",
      experience: "9 years",
      companies: ["Zoom", "Slack", "Early Stage Startup"],
      bio: "Specialized in building efficient operations for scaling startups.",
      sessionTypes: ["Operations Review", "Team Structure", "Process Design"],
      responseTime: "8 hours",
      successRate: "87%",
      languages: ["English", "German", "French"],
      isFeatured: false,
      isOnline: false
    },
    {
      id: 7,
      name: "James Lee",
      title: "Data Science & AI",
      avatar: "JL",
      rating: 4.9,
      reviews: 112,
      price: 229,
      categories: ["tech", "data"],
      expertise: ["Machine Learning", "Data Infrastructure", "Analytics"],
      availability: "today",
      location: "Toronto, Canada",
      experience: "11 years",
      companies: ["Netflix", "Spotify", "AI Startup"],
      bio: "Built AI systems for top tech companies. Focus on practical ML implementation.",
      sessionTypes: ["Technical Deep Dive", "Data Strategy", "Model Review"],
      responseTime: "2 hours",
      successRate: "94%",
      languages: ["English", "Mandarin"],
      isFeatured: true,
      isOnline: true
    },
    {
      id: 8,
      name: "Lisa Wang",
      title: "B2B Sales Expert",
      avatar: "LW",
      rating: 4.7,
      reviews: 89,
      price: 189,
      categories: ["sales", "growth"],
      expertise: ["Enterprise Sales", "Revenue Operations", "Account Management"],
      availability: "this-week",
      location: "Chicago, IL",
      experience: "8 years",
      companies: ["Salesforce", "HubSpot", "Series B Startup"],
      bio: "Built sales teams that generated $100M+ in revenue. Focus on scalable sales processes.",
      sessionTypes: ["Sales Strategy", "Pipeline Review", "Team Training"],
      responseTime: "5 hours",
      successRate: "89%",
      languages: ["English", "Mandarin"],
      isFeatured: false,
      isOnline: true
    }
  ];

  // Filter mentors based on search and filters
  const filteredMentors = mentors.filter(mentor => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    const matchesCategory = selectedCategory === "all" || 
      mentor.categories.includes(selectedCategory);

    // Price filter
    const matchesPrice = mentor.price >= priceRange[0] && mentor.price <= priceRange[1];

    // Availability filter
    const matchesAvailability = availability === "all" || 
      mentor.availability === availability;

    return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
  });

  // Sort mentors
  const sortedMentors = [...filteredMentors].sort((a, b) => {
    switch(sortBy) {
      case "rating": return b.rating - a.rating;
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "reviews": return b.reviews - a.reviews;
      case "experience": return b.experience - a.experience;
      default: return 0;
    }
  });

  // Handle bookmark toggle
  const toggleBookmark = (mentorId) => {
    if (bookmarkedMentors.includes(mentorId)) {
      setBookmarkedMentors(bookmarkedMentors.filter(id => id !== mentorId));
    } else {
      setBookmarkedMentors([...bookmarkedMentors, mentorId]);
    }
  };

  // Render mentor details dialog
  const renderMentorDialog = () => {
    if (!selectedMentor) return null;

    return (
      <Dialog
        open={!!selectedMentor}
        onClose={() => setSelectedMentor(null)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "24px",
            maxWidth: "900px",
            width: "100%",
            m: 2,
            overflow: "hidden"
          }
        }}
      >
        <DialogTitle sx={{ p: 0 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                height: 120,
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                position: "relative"
              }}
            >
              <IconButton
                onClick={() => setSelectedMentor(null)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.3)"
                  }
                }}
              >
                <X size={20} />
              </IconButton>
            </Box>
            
            <Box sx={{ position: "relative", px: 4, pb: 4 }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  border: "4px solid white",
                  position: "absolute",
                  top: -50,
                  left: 40,
                  fontSize: "2rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)"
                }}
              >
                {selectedMentor.avatar}
              </Avatar>

              <Box sx={{ ml: 16, mt: 4 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#111827" }}>
                      {selectedMentor.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "text.secondary", mb: 1 }}>
                      {selectedMentor.title}
                    </Typography>
                    
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Rating value={selectedMentor.rating} precision={0.1} readOnly />
                      <Typography sx={{ color: "text.secondary" }}>
                        {selectedMentor.rating} • {selectedMentor.reviews} reviews
                      </Typography>
                      {selectedMentor.isOnline && (
                        <Chip 
                          label="Online now" 
                          size="small" 
                          sx={{ 
                            background: "#10B981",
                            color: "white",
                            fontWeight: 600
                          }}
                        />
                      )}
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={1}>
                    <IconButton
                      onClick={() => toggleBookmark(selectedMentor.id)}
                      sx={{
                        border: "1px solid #E5E7EB",
                        background: bookmarkedMentors.includes(selectedMentor.id) ? "#FEF3C7" : "white"
                      }}
                    >
                      <Bookmark 
                        size={20} 
                        color={bookmarkedMentors.includes(selectedMentor.id) ? "#F59E0B" : "#6B7280"}
                        fill={bookmarkedMentors.includes(selectedMentor.id) ? "#F59E0B" : "none"}
                      />
                    </IconButton>
                    <IconButton sx={{ border: "1px solid #E5E7EB" }}>
                      <Share2 size={20} color="#6B7280" />
                    </IconButton>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MapPin size={18} color="#6B7280" />
                    <Typography>{selectedMentor.location}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Briefcase size={18} color="#6B7280" />
                    <Typography>{selectedMentor.experience} experience</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Clock size={18} color="#6B7280" />
                    <Typography>Response: {selectedMentor.responseTime}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ p: 4, pt: 0 }}>
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={8}>
              <Stack spacing={4}>
                {/* Bio */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    About
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {selectedMentor.bio}
                  </Typography>
                </Box>

                {/* Expertise */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Areas of Expertise
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {selectedMentor.expertise.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{
                          background: "#F3F4F6",
                          color: "#111827",
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Previous Companies */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Previous Experience
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    {selectedMentor.companies.map((company, idx) => (
                      <Chip
                        key={idx}
                        label={company}
                        icon={<Briefcase size={14} />}
                        sx={{
                          background: "#6366F1",
                          color: "white",
                          fontWeight: 600
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Session Types */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Session Types
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedMentor.sessionTypes.map((type, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Card sx={{ p: 2, borderRadius: "12px" }}>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ 
                              width: 40, 
                              height: 40, 
                              borderRadius: "8px", 
                              background: "#F3F4F6",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}>
                              {idx === 0 && <Target size={20} color="#6366F1" />}
                              {idx === 1 && <Zap size={20} color="#EC4899" />}
                              {idx === 2 && <Users size={20} color="#10B981" />}
                            </Box>
                            <Typography sx={{ fontWeight: 600 }}>
                              {type}
                            </Typography>
                          </Stack>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                {/* Pricing Card */}
                <Card sx={{ p: 3, borderRadius: "16px" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Session Pricing
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: "#111827" }}>
                      ${selectedMentor.price}
                      <Typography component="span" sx={{ color: "text.secondary", fontSize: "1rem", ml: 1 }}>
                        / hour
                      </Typography>
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={() => navigate(`/booking/${selectedMentor.id}`)}
                    sx={{
                      background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                      color: "white",
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: "1rem",
                      borderRadius: "12px",
                      mb: 2
                    }}
                  >
                    Book Session
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() => navigate(`/mentors/${selectedMentor.id}`)}
                    sx={{
                      borderColor: "#E5E7EB",
                      color: "#111827",
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: "12px"
                    }}
                  >
                    View Profile
                  </Button>
                </Card>

                {/* Stats Card */}
                <Card sx={{ p: 3, borderRadius: "16px" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#111827" }}>
                    Mentor Stats
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Success Rate</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                        {selectedMentor.successRate}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Avg. Response</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                        {selectedMentor.responseTime}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Sessions Completed</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                        {selectedMentor.reviews}+
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography sx={{ color: "text.secondary" }}>Languages</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                        {selectedMentor.languages.join(", ")}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>

                {/* Availability */}
                <Card sx={{ p: 3, borderRadius: "16px" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Availability
                  </Typography>
                  
                  <Stack spacing={1}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Calendar size={18} color="#6B7280" />
                      <Box>
                        <Typography sx={{ fontWeight: 600 }}>
                          {selectedMentor.availability === "today" ? "Today" : 
                           selectedMentor.availability === "this-week" ? "This Week" : "Next Week"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          Next available slot
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Button
                      variant="text"
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#6366F1", fontWeight: 600 }}
                    >
                      View full calendar
                    </Button>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Box sx={{ 
      background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <Box sx={{ 
        background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        color: "white",
        py: { xs: 6, md: 8 }
      }}>
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Box>
              <Button
                startIcon={<ArrowLeft size={20} />}
                onClick={() => navigate("/")}
                sx={{
                  color: "white",
                  background: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.3)"
                  }
                }}
              >
                Back to Home
              </Button>
            </Box>

            <Stack spacing={2}>
              <Typography variant="h1" sx={{ 
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1
              }}>
                Find Your Perfect Mentor
              </Typography>
              
              <Typography variant="h5" sx={{ 
                opacity: 0.9,
                fontSize: { xs: "1.125rem", md: "1.375rem" },
                maxWidth: 800
              }}>
                Connect with 700+ industry experts who've been where you are. 
                Get personalized guidance to accelerate your growth.
              </Typography>
            </Stack>

            {/* Stats */}
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    700+
                  </Typography>
                  <Typography>Expert Mentors</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    4.8
                  </Typography>
                  <Typography>Avg. Rating</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    50+
                  </Typography>
                  <Typography>Industries</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    98%
                  </Typography>
                  <Typography>Satisfaction Rate</Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Left Sidebar - Filters */}
          {!isMobile && (
            <Grid item xs={12} md={3}>
              <Box sx={{ position: "sticky", top: 100 }}>
                <Card sx={{ p: 3, borderRadius: "16px", mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
                    <FilterIcon size={20} /> Filters
                  </Typography>

                  {/* Search */}
                  <TextField
                    fullWidth
                    placeholder="Search mentors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search size={20} color="#6B7280" />
                        </InputAdornment>
                      )
                    }}
                    sx={{ mb: 3 }}
                  />

                  {/* Categories */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Categories
                    </Typography>
                    <Stack spacing={1}>
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          startIcon={category.icon}
                          onClick={() => setSelectedCategory(category.id)}
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: selectedCategory === category.id ? "#6366F1" : "#6B7280",
                            background: selectedCategory === category.id ? "#EEF2FF" : "transparent",
                            fontWeight: selectedCategory === category.id ? 600 : 400,
                            "&:hover": {
                              background: selectedCategory === category.id ? "#EEF2FF" : "#F9FAFB"
                            }
                          }}
                        >
                          {category.label}
                          {category.count && (
                            <Chip 
                              label={category.count} 
                              size="small" 
                              sx={{ 
                                ml: "auto",
                                background: selectedCategory === category.id ? "#6366F1" : "#F3F4F6",
                                color: selectedCategory === category.id ? "white" : "#6B7280",
                                fontSize: "0.75rem",
                                height: 20
                              }}
                            />
                          )}
                        </Button>
                      ))}
                    </Stack>
                  </Box>

                  {/* Price Range */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Price Range
                    </Typography>
                    <Box sx={{ px: 1 }}>
                      <Slider
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        min={50}
                        max={500}
                        sx={{ color: "#6366F1" }}
                      />
                      <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
                        <Chip label={`$${priceRange[0]}`} size="small" />
                        <Chip label={`$${priceRange[1]}`} size="small" />
                      </Stack>
                    </Box>
                  </Box>

                  {/* Availability */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Availability
                    </Typography>
                    <Stack spacing={1}>
                      {[
                        { value: "all", label: "All" },
                        { value: "today", label: "Available Today" },
                        { value: "this-week", label: "This Week" },
                        { value: "next-week", label: "Next Week" }
                      ].map((option) => (
                        <Button
                          key={option.value}
                          onClick={() => setAvailability(option.value)}
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: availability === option.value ? "#6366F1" : "#6B7280",
                            background: availability === option.value ? "#EEF2FF" : "transparent",
                            fontWeight: availability === option.value ? 600 : 400
                          }}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </Stack>
                  </Box>

                  {/* Sort By */}
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: "#111827" }}>
                      Sort By
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        sx={{ background: "white" }}
                      >
                        <MenuItem value="rating">Highest Rating</MenuItem>
                        <MenuItem value="reviews">Most Reviews</MenuItem>
                        <MenuItem value="price-low">Price: Low to High</MenuItem>
                        <MenuItem value="price-high">Price: High to Low</MenuItem>
                        <MenuItem value="experience">Most Experience</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Card>

                {/* Need Help Card */}
                <Card sx={{ p: 3, borderRadius: "16px", background: "#F0F9FF" }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827" }}>
                      Need help choosing?
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Our AI matching algorithm can find your perfect mentor in minutes.
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<Zap size={18} />}
                      onClick={() => navigate("/matching")}
                      sx={{
                        background: "linear-gradient(45deg, #EC4899, #F59E0B)",
                        color: "white",
                        fontWeight: 600
                      }}
                    >
                      Try AI Matching
                    </Button>
                  </Stack>
                </Card>
              </Box>
            </Grid>
          )}

          {/* Main Content - Mentors Grid */}
          <Grid item xs={12} md={9}>
            {/* Mobile Filters */}
            {isMobile && (
              <Box sx={{ mb: 3 }}>
                <Card sx={{ p: 2, borderRadius: "12px" }}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      fullWidth
                      placeholder="Search mentors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search size={18} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Button
                      variant="outlined"
                      startIcon={<Filter size={18} />}
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      Filters
                    </Button>
                  </Stack>

                  {showFilters && (
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <FormControl fullWidth size="small">
                            <Select
                              value={selectedCategory}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                              {categories.map((cat) => (
                                <MenuItem key={cat.id} value={cat.id}>{cat.label}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth size="small">
                            <Select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                            >
                              <MenuItem value="rating">Rating</MenuItem>
                              <MenuItem value="reviews">Reviews</MenuItem>
                              <MenuItem value="price-low">Price Low</MenuItem>
                              <MenuItem value="price-high">Price High</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </Card>
              </Box>
            )}

            {/* Results Header */}
            <Box sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              mb: 3 
            }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#111827" }}>
                  Available Mentors
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {sortedMentors.length} mentors found
                </Typography>
              </Box>

              {!isMobile && (
                <Tabs 
                  value={activeTab} 
                  onChange={(e, newValue) => setActiveTab(newValue)}
                  sx={{
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.875rem"
                    }
                  }}
                >
                  <Tab label="All Mentors" />
                  <Tab label="Featured" />
                  <Tab label="Available Now" />
                  <Tab label="Most Popular" />
                </Tabs>
              )}
            </Box>

            {/* Mentors Grid */}
            <Grid container spacing={3}>
              {sortedMentors.map((mentor) => (
                <Grid item xs={12} sm={6} lg={4} key={mentor.id}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      border: "1px solid #F3F4F6",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
                      }
                    }}
                  >
                    {/* Featured Badge */}
                    {mentor.isFeatured && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          background: "linear-gradient(45deg, #EC4899, #F59E0B)",
                          color: "white",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          zIndex: 1
                        }}
                      >
                        Featured
                      </Box>
                    )}

                    {/* Bookmark Button */}
                    <IconButton
                      onClick={() => toggleBookmark(mentor.id)}
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(10px)",
                        zIndex: 1,
                        "&:hover": {
                          background: "white"
                        }
                      }}
                    >
                      <Bookmark 
                        size={18} 
                        color={bookmarkedMentors.includes(mentor.id) ? "#F59E0B" : "#6B7280"}
                        fill={bookmarkedMentors.includes(mentor.id) ? "#F59E0B" : "none"}
                      />
                    </IconButton>

                    {/* Online Status */}
                    {mentor.isOnline && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 50,
                          right: 12,
                          background: "#10B981",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          zIndex: 1
                        }}
                      />
                    )}

                    {/* Card Content */}
                    <CardActionArea onClick={() => setSelectedMentor(mentor)}>
                      <CardContent sx={{ p: 3 }}>
                        <Stack spacing={3}>
                          {/* Header */}
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar
                              sx={{
                                width: 64,
                                height: 64,
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                background: "linear-gradient(135deg, #6366F1, #8B5CF6)"
                              }}
                            >
                              {mentor.avatar}
                            </Avatar>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827", mb: 0.5 }}>
                                {mentor.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                                {mentor.title}
                              </Typography>
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Rating value={mentor.rating} size="small" readOnly />
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                  {mentor.rating} ({mentor.reviews})
                                </Typography>
                              </Stack>
                            </Box>
                          </Stack>

                          {/* Expertise */}
                          <Box>
                            <Stack direction="row" flexWrap="wrap" gap={0.5}>
                              {mentor.expertise.slice(0, 3).map((skill, idx) => (
                                <Chip
                                  key={idx}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    background: "#F3F4F6",
                                    color: "#111827",
                                    fontSize: "0.75rem"
                                  }}
                                />
                              ))}
                              {mentor.expertise.length > 3 && (
                                <Chip
                                  label={`+${mentor.expertise.length - 3}`}
                                  size="small"
                                  sx={{
                                    background: "#F3F4F6",
                                    color: "#6B7280",
                                    fontSize: "0.75rem"
                                  }}
                                />
                              )}
                            </Stack>
                          </Box>

                          {/* Details */}
                          <Stack spacing={1}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <MapPin size={14} color="#6B7280" />
                              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {mentor.location}
                              </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Briefcase size={14} color="#6B7280" />
                              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {mentor.experience} experience
                              </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Clock size={14} color="#6B7280" />
                              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Responds in {mentor.responseTime}
                              </Typography>
                            </Box>
                          </Stack>

                          {/* Footer */}
                          <Box sx={{ 
                            display: "flex", 
                            justifyContent: "space-between", 
                            alignItems: "center",
                            pt: 2,
                            borderTop: "1px solid #F3F4F6"
                          }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827" }}>
                              ${mentor.price}
                              <Typography component="span" sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                                /hr
                              </Typography>
                            </Typography>
                            
                            <Button
                              variant="contained"
                              size="small"
                              endIcon={<ChevronRight size={16} />}
                              sx={{
                                background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
                                color: "white",
                                fontWeight: 600,
                                borderRadius: "8px"
                              }}
                            >
                              View
                            </Button>
                          </Box>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* No Results */}
            {sortedMentors.length === 0 && (
              <Box sx={{ 
                textAlign: "center", 
                py: 8,
                background: "#F9FAFB",
                borderRadius: "16px"
              }}>
                <Search size={48} color="#D1D5DB" />
                <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
                  No mentors found
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  Try adjusting your filters or search terms
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setPriceRange([50, 500]);
                    setAvailability("all");
                  }}
                >
                  Clear all filters
                </Button>
              </Box>
            )}

            {/* Pagination */}
            {sortedMentors.length > 0 && (
              <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                mt: 6 
              }}>
                <Stack direction="row" spacing={1}>
                  <Button variant="outlined" sx={{ borderColor: "#E5E7EB" }}>Previous</Button>
                  <Button variant="contained" sx={{ background: "#6366F1" }}>1</Button>
                  <Button variant="outlined" sx={{ borderColor: "#E5E7EB" }}>2</Button>
                  <Button variant="outlined" sx={{ borderColor: "#E5E7EB" }}>3</Button>
                  <Button variant="outlined" sx={{ borderColor: "#E5E7EB" }}>Next</Button>
                </Stack>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Card sx={{ 
            p: { xs: 4, md: 8 }, 
            borderRadius: "24px",
            background: "linear-gradient(135deg, #10B981, #3B82F6)",
            color: "white",
            textAlign: "center"
          }}>
            <Stack spacing={4} alignItems="center">
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" } }}>
                Can't find the right mentor?
              </Typography>
              
              <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600 }}>
                Our AI-powered matching algorithm finds your perfect mentor based on your specific needs and goals.
              </Typography>
              
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/matching")}
                  sx={{
                    background: "white",
                    color: "#10B981",
                    px: 5,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "12px"
                  }}
                >
                  Try AI Matching
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate("/contact")}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "white",
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: "1rem",
                    borderRadius: "12px"
                  }}
                >
                  Get Personalized Help
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* Mentor Details Dialog */}
      {renderMentorDialog()}
    </Box>
  );
};

export default MentorsPage;