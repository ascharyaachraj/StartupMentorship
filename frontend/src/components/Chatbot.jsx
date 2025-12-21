import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Fade,
  Slide
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  X,
  MessageCircle,
  Bot,
  User,
  Sparkles,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm GrowthConnect AI. I can help you find the perfect mentor, answer questions about our platform, or provide startup advice. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const quickReplies = [
    "Find me a growth mentor",
    "How does pricing work?",
    "I need fundraising advice",
    "What's the booking process?",
    "Tell me about success stories"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      // Simulate API call
      setTimeout(() => {
        const botResponses = [
          "I can help with that! Based on your query, I recommend connecting with our growth experts. Would you like me to suggest specific mentors?",
          "Our platform offers flexible pricing starting at $99/month for unlimited messaging and 2 video sessions. Would you like more details?",
          "For fundraising, we have several VC partners who can guide you through the process. What stage is your startup at?",
          "Booking is simple: 1) Browse mentors 2) Check availability 3) Schedule session 4) Connect via video. Ready to get started?",
          "We've helped 1000+ startups achieve their goals. One founder increased revenue by 300% in 6 months with our mentorship!"
        ]
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        
        const botMessage = {
          id: messages.length + 2,
          text: randomResponse,
          sender: 'bot',
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)
      }, 1500)

    } catch (error) {
      toast.error('Failed to send message')
      setIsTyping(false)
    }
  }

  const handleQuickReply = (reply) => {
    setInput(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      {!open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              background: 'linear-gradient(45deg, #EC4899, #8B5CF6)',
              color: 'white',
              width: 64,
              height: 64,
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #DB2777, #7C3AED)',
                boxShadow: '0 15px 35px rgba(139, 92, 246, 0.6)'
              }
            }}
          >
            <MessageCircle size={28} />
          </IconButton>
        </motion.div>
      )}

      {/* Chat Window */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={24}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: { xs: 'calc(100vw - 48px)', sm: 400 },
            height: 600,
            borderRadius: 3,
            overflow: 'hidden',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
              color: 'white',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <Bot size={24} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  GrowthConnect AI
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Your startup mentor assistant
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={onClose} sx={{ color: 'white' }}>
              <X size={24} />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 3,
              background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)'
            }}
          >
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                      mb: 3
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        maxWidth: '80%',
                        flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          background: message.sender === 'bot' 
                            ? 'linear-gradient(45deg, #10B981, #34D399)'
                            : 'linear-gradient(45deg, #6366F1, #8B5CF6)'
                        }}
                      >
                        {message.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                      </Avatar>
                      <Box>
                        <Paper
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: message.sender === 'bot' 
                              ? 'white' 
                              : 'linear-gradient(45deg, #6366F1, #8B5CF6)',
                            color: message.sender === 'bot' ? 'text.primary' : 'white',
                            borderTopLeftRadius: message.sender === 'user' ? 12 : 2,
                            borderTopRightRadius: message.sender === 'user' ? 2 : 12
                          }}
                        >
                          <Typography variant="body1">
                            {message.text}
                          </Typography>
                        </Paper>
                        {message.sender === 'bot' && (
                          <Box sx={{ display: 'flex', gap: 1, mt: 1, justifyContent: 'flex-start' }}>
                            <IconButton size="small">
                              <ThumbsUp size={14} />
                            </IconButton>
                            <IconButton size="small">
                              <ThumbsDown size={14} />
                            </IconButton>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Avatar sx={{ width: 32, height: 32, background: 'linear-gradient(45deg, #10B981, #34D399)' }}>
                  <Bot size={16} />
                </Avatar>
                <Paper sx={{ p: 2, borderRadius: 2, background: 'white' }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                      >
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1' }} />
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>

          {/* Quick Replies */}
          <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
              Quick replies:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {quickReplies.map((reply, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    size="small"
                    onClick={() => handleQuickReply(reply)}
                    sx={{
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      color: '#6366F1'
                    }}
                  >
                    {reply}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)', background: 'white' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                multiline
                maxRows={3}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about mentors, pricing, or startup advice..."
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    background: '#F8FAFC'
                  }
                }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  onClick={handleSend}
                  disabled={!input.trim()}
                  sx={{
                    background: 'linear-gradient(45deg, #6366F1, #8B5CF6)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4F46E5, #7C3AED)'
                    },
                    '&.Mui-disabled': {
                      background: '#E5E7EB',
                      color: '#9CA3AF'
                    }
                  }}
                >
                  <Send size={20} />
                </IconButton>
              </motion.div>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1, display: 'block' }}>
              Powered by AI • Secured with encryption
            </Typography>
          </Box>
        </Paper>
      </Slide>
    </>
  )
}

export default Chatbot