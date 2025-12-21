import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Stack,
  Grid,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Card,
  Divider
} from "@mui/material";
import {
  X,
  Users,
  Zap,
  MessageSquare,
  CheckCircle,
  Star,
  Briefcase,
  Award,
  Clock,
  Brain,
  Filter,
  ShieldCheck,
  Cpu,
  FileText,
  Video,
  Globe,
  Target,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Database,
  Sparkles,
  Calendar,
  PlayCircle,
  ThumbsUp,
  ArrowRight,
  ChevronRight,
  Shield,
  Users as UsersIcon,
  Target as TargetIcon
} from "lucide-react";

const LearnMoreDialog = ({ openDialog, setOpenDialog, navigate }) => {
  // Features data for the dialog
  const featuresData = {
    "mentors": {
      id: "mentors",
      title: "700+ Expert Mentors",
      subtitle: "Access industry leaders and seasoned professionals who've been in your shoes",
      icon: <Users size={28} />,
      color: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
      heroEmoji: "👥",
      stats: [
        { value: "15+", label: "Years avg. experience", icon: <Briefcase size={18} /> },
        { value: "95%", label: "Success rate", icon: <Award size={18} /> },
        { value: "24h", label: "Response time", icon: <Clock size={18} /> },
        { value: "50+", label: "Industries covered", icon: <Globe size={18} /> }
      ],
      categories: [
        { name: "Tech & Engineering", count: 240, icon: <Cpu size={16} />, color: "#3B82F6" },
        { name: "Product Management", count: 180, icon: <Target size={16} />, color: "#8B5CF6" },
        { name: "Growth & Marketing", count: 150, icon: <TrendingUp size={16} />, color: "#EC4899" },
        { name: "Leadership & Strategy", count: 130, icon: <UsersIcon size={16} />, color: "#10B981" }
      ],
      highlights: [
        "Ex-Google, Meta, Amazon leaders",
        "Series A-C startup founders",
        "Industry award winners",
        "Published authors & speakers",
        "500+ successful exits",
        "Unicorn company builders"
      ],
      process: [
        {
          step: "1",
          title: "Browse & Filter",
          description: "Search by industry, expertise, and availability",
          icon: <Filter size={20} />
        },
        {
          step: "2",
          title: "Book Session",
          description: "Schedule 1:1 sessions at your convenience",
          icon: <Calendar size={20} />
        },
        {
          step: "3",
          title: "Get Results",
          description: "Receive actionable insights and guidance",
          icon: <Lightbulb size={20} />
        }
      ],
      testimonial: {
        quote: "My mentor helped me navigate Series A funding and avoid critical mistakes that saved us 6 months of runway.",
        author: "Sarah Chen",
        role: "CEO, TechFlow AI",
        avatar: "SC"
      }
    },
    "ai-matching": {
      id: "ai-matching",
      title: "AI-Powered Matching",
      subtitle: "Our advanced AI finds your perfect mentor match in minutes",
      icon: <Zap size={28} />,
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #F59E0B)",
      heroEmoji: "🤖",
      stats: [
        { value: "10x", label: "Better matching", icon: <Sparkles size={18} /> },
        { value: "94%", label: "Match accuracy", icon: <TargetIcon size={18} /> },
        { value: "5min", label: "Setup time", icon: <Clock size={18} /> },
        { value: "50+", label: "Data points analyzed", icon: <Database size={18} /> }
      ],
      features: [
        {
          title: "Smart Algorithm",
          description: "Analyzes 50+ data points including goals, challenges, personality, and learning style",
          icon: <Brain size={20} />,
          color: "#8B5CF6"
        },
        {
          title: "Dynamic Filtering",
          description: "Real-time matching based on availability, expertise, and success history",
          icon: <Filter size={20} />,
          color: "#EC4899"
        },
        {
          title: "Privacy First",
          description: "Your data is encrypted, secure, and never shared with third parties",
          icon: <ShieldCheck size={20} />,
          color: "#10B981"
        },
        {
          title: "Continuous Learning",
          description: "Algorithm improves with every successful mentorship outcome",
          icon: <TrendingUp size={20} />,
          color: "#3B82F6"
        }
      ],
      howItWorks: [
        "Answer 5 quick questions about your goals",
        "AI analyzes your unique needs and challenges",
        "Get 3 perfect mentor recommendations",
        "Review profiles and choose your match",
        "Start your first session immediately"
      ],
      benefits: [
        "Save 10+ hours of manual searching",
        "94% higher satisfaction rate",
        "Personalized learning paths",
        "Regular match optimization"
      ],
      testimonial: {
        quote: "The AI matching found me a mentor who had solved my exact problem 2 years ago. Saved me months of trial and error.",
        author: "Marcus Lee",
        role: "Founder, CodeCraft",
        avatar: "ML"
      }
    },
    "sessions": {
      id: "sessions",
      title: "Transformative 1:1 Sessions",
      subtitle: "Personalized sessions that deliver measurable results",
      icon: <MessageSquare size={28} />,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #3B82F6)",
      heroEmoji: "🎯",
      stats: [
        { value: "60min", label: "Session length", icon: <Clock size={18} /> },
        { value: "100%", label: "Recorded sessions", icon: <Video size={18} /> },
        { value: "48h", label: "Follow-up notes", icon: <FileText size={18} /> },
        { value: "4.9/5", label: "Satisfaction score", icon: <Star size={18} /> }
      ],
      sessionTypes: [
        {
          type: "Strategy Session",
          duration: "60 min",
          focus: "Business planning & growth strategy",
          icon: <Target size={20} />,
          bestFor: "Founders planning next phase"
        },
        {
          type: "Technical Deep Dive",
          duration: "45 min",
          focus: "Code review, architecture, tech stack decisions",
          icon: <Cpu size={20} />,
          bestFor: "CTOs & technical founders"
        },
        {
          type: "Leadership Coaching",
          duration: "60 min",
          focus: "Team management & executive skills",
          icon: <UsersIcon size={20} />,
          bestFor: "Scaling your leadership"
        },
        {
          type: "Pitch Perfect",
          duration: "45 min",
          focus: "Investor pitching & fundraising",
          icon: <BarChart3 size={20} />,
          bestFor: "Fundraising preparation"
        }
      ],
      features: [
        "HD video calls with screen sharing",
        "Session recordings & transcripts",
        "Personalized action items",
        "Resource library access",
        "Progress tracking dashboard",
        "Follow-up accountability"
      ],
      outcomes: [
        "Clear 90-day action plan",
        "Solved technical challenges",
        "Improved leadership confidence",
        "Accelerated career growth",
        "Validated business decisions",
        "Stronger investor pitches"
      ],
      testimonial: {
        quote: "The 1:1 sessions gave me clarity on our product roadmap that would have taken months to figure out alone.",
        author: "Michael Rodriguez",
        role: "Product Lead, Streamline",
        avatar: "MR"
      }
    }
  };

  const feature = featuresData[openDialog];
  
  if (!feature) return null;

  const renderDialogContent = () => {
    return (
      <Box sx={{ maxWidth: 1000, width: "100%", overflow: "hidden" }}>
        {/* Header */}
        <DialogTitle sx={{ p: 0, mb: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "20px",
                  background: feature.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "2.5rem",
                  flexShrink: 0
                }}
              >
                {feature.heroEmoji}
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: "#111827", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "1.125rem" }}>
                  {feature.subtitle}
                </Typography>
              </Box>
            </Stack>
            <IconButton 
              onClick={() => setOpenDialog(null)} 
              sx={{ 
                color: "#6B7280",
                "&:hover": { background: "#F3F4F6" }
              }}
            >
              <X size={24} />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          {/* Stats Grid */}
          <Box sx={{ mb: 6 }}>
            <Grid container spacing={2}>
              {feature.stats.map((stat, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: "16px", 
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    textAlign: "center",
                    height: "100%"
                  }}>
                    <Box sx={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: `${feature.color}15`,
                      mb: 1.5
                    }}>
                      <Box sx={{ color: feature.color }}>
                        {stat.icon}
                      </Box>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#111827", mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} lg={6}>
              {/* Categories */}
              {feature.categories && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <Globe size={20} /> Mentor Categories
                  </Typography>
                  <Grid container spacing={2}>
                    {feature.categories.map((cat, idx) => (
                      <Grid item xs={6} key={idx}>
                        <Box sx={{ 
                          p: 2.5, 
                          borderRadius: "12px", 
                          background: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          transition: "all 0.2s",
                          "&:hover": {
                            borderColor: cat.color,
                            transform: "translateY(-2px)"
                          }
                        }}>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ color: cat.color }}>
                              {cat.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography sx={{ fontWeight: 600, color: "#111827" }}>
                                {cat.name}
                              </Typography>
                            </Box>
                            <Chip 
                              label={`${cat.count}+`} 
                              size="small" 
                              sx={{ 
                                background: cat.color,
                                color: "white",
                                fontWeight: 700,
                                fontSize: "0.75rem"
                              }}
                            />
                          </Stack>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Features */}
              {feature.features && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <Zap size={20} /> Key Features
                  </Typography>
                  <Stack spacing={2}>
                    {feature.features.map((item, idx) => (
                      <Box key={idx} sx={{ 
                        p: 2.5, 
                        borderRadius: "12px", 
                        border: "1px solid #E5E7EB",
                        background: "white"
                      }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Box sx={{ 
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            background: `${item.color || feature.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            mt: 0.5
                          }}>
                            <Box sx={{ color: item.color || feature.color }}>
                              {item.icon || <CheckCircle size={20} />}
                            </Box>
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: "#111827", mb: 0.5 }}>
                              {item.title || item}
                            </Typography>
                            {item.description && (
                              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {item.description}
                              </Typography>
                            )}
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* How It Works */}
              {feature.howItWorks && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <PlayCircle size={20} /> How It Works
                  </Typography>
                  <Stack spacing={2}>
                    {feature.howItWorks.map((item, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box sx={{ 
                          width: 28,
                          height: 28,
                          borderRadius: "14px",
                          background: feature.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          flexShrink: 0,
                          mt: 0.5
                        }}>
                          {idx + 1}
                        </Box>
                        <Typography sx={{ color: "#111827", lineHeight: 1.6 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} lg={6}>
              {/* Session Types */}
              {feature.sessionTypes && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <Calendar size={20} /> Session Types
                  </Typography>
                  <Stack spacing={2}>
                    {feature.sessionTypes.map((session, idx) => (
                      <Box key={idx} sx={{ 
                        p: 2.5, 
                        borderRadius: "12px", 
                        border: "1px solid #E5E7EB",
                        background: "white"
                      }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ color: feature.color }}>
                              {session.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: "#111827" }}>
                              {session.type}
                            </Typography>
                          </Stack>
                          <Chip 
                            label={session.duration} 
                            size="small" 
                            sx={{ 
                              background: `${feature.color}15`,
                              color: feature.color,
                              fontWeight: 600
                            }}
                          />
                        </Stack>
                        <Typography sx={{ color: "text.secondary", mb: 1, pl: 5 }}>
                          {session.focus}
                        </Typography>
                        {session.bestFor && (
                          <Typography variant="caption" sx={{ 
                            color: feature.color, 
                            fontWeight: 600,
                            pl: 5,
                            display: "block"
                          }}>
                            Best for: {session.bestFor}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Highlights/Benefits/Outcomes */}
              {(feature.highlights || feature.benefits || feature.outcomes) && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <ThumbsUp size={20} /> {feature.highlights ? "Mentor Highlights" : feature.benefits ? "Benefits" : "Expected Outcomes"}
                  </Typography>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: "16px", 
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB"
                  }}>
                    <Grid container spacing={2}>
                      {(feature.highlights || feature.benefits || feature.outcomes).map((item, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 1.5 }}>
                            <Box sx={{ 
                              width: 24,
                              height: 24,
                              borderRadius: "6px",
                              background: feature.gradient,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              mt: 0.25
                            }}>
                              <CheckCircle size={14} color="white" />
                            </Box>
                            <Typography sx={{ color: "#111827", fontSize: "0.95rem" }}>
                              {item}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              )}

              {/* Process Steps */}
              {feature.process && (
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#111827", display: "flex", alignItems: "center", gap: 1 }}>
                    <ChevronRight size={20} /> Getting Started
                  </Typography>
                  <Stack spacing={2}>
                    {feature.process.map((step, idx) => (
                      <Card key={idx} sx={{ p: 2.5, borderRadius: "12px" }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box sx={{ 
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            background: feature.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: 800,
                            fontSize: "1.25rem"
                          }}>
                            {step.step}
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                              {step.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                              {step.description}
                            </Typography>
                          </Box>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Testimonial */}
              {feature.testimonial && (
                <Box sx={{ 
                  p: 3, 
                  borderRadius: "16px", 
                  background: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)",
                  border: "1px solid #E5E7EB"
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#111827" }}>
                    Success Story
                  </Typography>
                  <Typography sx={{ 
                    color: "text.secondary", 
                    fontStyle: "italic", 
                    mb: 3,
                    fontSize: "1.05rem",
                    lineHeight: 1.7
                  }}>
                    "{feature.testimonial.quote}"
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ bgcolor: feature.color, fontWeight: 600 }}>
                      {feature.testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                        {feature.testimonial.author}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {feature.testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              )}
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 6 }} />

          {/* CTA Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: "#111827" }}>
              Ready to experience {feature.title.toLowerCase()}?
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto" }}>
              Join thousands of founders who have accelerated their growth with our platform.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setOpenDialog(null);
                  navigate("/register");
                }}
                sx={{
                  background: feature.gradient,
                  color: "white",
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  "&:hover": {
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                    boxShadow: `0 10px 20px ${feature.color}40`
                  },
                  transition: "all 0.3s"
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  setOpenDialog(null);
                  navigate("/mentors");
                }}
                sx={{
                  borderColor: "#E5E7EB",
                  color: "#111827",
                  px: 5,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  "&:hover": {
                    borderColor: feature.color,
                    background: `${feature.color}08`
                  }
                }}
              >
                Browse Mentors
              </Button>
              <Button
                variant="text"
                size="large"
                onClick={() => setOpenDialog(null)}
                sx={{
                  color: "#6B7280",
                  px: 5,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  "&:hover": {
                    background: "#F3F4F6"
                  }
                }}
              >
                Close
              </Button>
            </Stack>
            <Typography variant="caption" sx={{ 
              color: "text.secondary", 
              mt: 3,
              display: "block"
            }}>
              No credit card required • 14-day free trial • Cancel anytime
            </Typography>
          </Box>
        </DialogContent>
      </Box>
    );
  };

  return (
    <Dialog
      open={!!openDialog}
      onClose={() => setOpenDialog(null)}
      maxWidth="xl"
      fullWidth
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "32px",
          maxWidth: "1000px",
          width: "100%",
          m: { xs: 2, md: 4 },
          overflow: "hidden",
          p: 3
        }
      }}
    >
      {renderDialogContent()}
    </Dialog>
  );
};

export default LearnMoreDialog;