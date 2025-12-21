import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  FaSearch, 
  FaFilter, 
  FaStar, 
  FaBriefcase, 
  FaClock,
  FaMoneyBill
} from 'react-icons/fa';
import './Mentors.css';

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [industry, setIndustry] = useState('');
  const [expertise, setExpertise] = useState('');

  useEffect(() => {
    fetchMentors();
  }, [industry, expertise]);

  const fetchMentors = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (industry) params.append('industry', industry);
      if (expertise) params.append('expertise', expertise);
      
      const res = await axios.get(`http://localhost:5000/api/mentors?${params}`);
      setMentors(res.data.mentors);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      mentor.user?.name?.toLowerCase().includes(searchLower) ||
      mentor.industry?.toLowerCase().includes(searchLower) ||
      mentor.expertise?.some(exp => exp.toLowerCase().includes(searchLower)) ||
      mentor.description?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="mentors-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Find Your Perfect Mentor</h1>
          <p>Browse through our curated list of experienced mentors across various industries</p>
        </div>

        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search mentors by name, expertise, or industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <label className="filter-label">
                <FaFilter /> Industry
              </label>
              <select 
                value={industry} 
                onChange={(e) => setIndustry(e.target.value)}
                className="filter-select"
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label">
                <FaFilter /> Expertise
              </label>
              <select 
                value={expertise} 
                onChange={(e) => setExpertise(e.target.value)}
                className="filter-select"
              >
                <option value="">All Expertise</option>
                <option value="Leadership">Leadership</option>
                <option value="Career Growth">Career Growth</option>
                <option value="Startup">Startup</option>
                <option value="Product Management">Product Management</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Science">Data Science</option>
              </select>
            </div>
            
            <button 
              onClick={() => {
                setIndustry('');
                setExpertise('');
                setSearchTerm('');
              }}
              className="btn btn-outline"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Mentors Grid */}
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading mentors...</p>
          </div>
        ) : (
          <>
            <div className="mentors-count">
              <h3>{filteredMentors.length} Mentors Found</h3>
            </div>
            
            <div className="mentors-grid">
              {filteredMentors.map(mentor => (
                <div key={mentor._id} className="mentor-card">
                  <div className="mentor-header">
                    <img 
                      src={mentor.user?.profile?.avatar || 'https://ui-avatars.com/api/?name=Mentor&background=3a86ff&color=fff'} 
                      alt={mentor.user?.name}
                      className="mentor-avatar"
                    />
                    <div className="mentor-info">
                      <h3>{mentor.user?.name}</h3>
                      <p className="mentor-title">{mentor.user?.profile?.jobTitle || 'Expert Mentor'}</p>
                      <div className="mentor-rating">
                        <FaStar className="star-icon" />
                        <span>{mentor.rating || 'New'}</span>
                        <span className="reviews">({mentor.reviewsCount || 0} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mentor-details">
                    <div className="detail-item">
                      <FaBriefcase />
                      <span>{mentor.industry}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock />
                      <span>{mentor.yearsOfExperience} years experience</span>
                    </div>
                    <div className="detail-item">
                      <FaMoneyBill />
                      <span>${mentor.hourlyRate}/hour</span>
                    </div>
                  </div>
                  
                  <p className="mentor-description">
                    {mentor.description?.substring(0, 120)}...
                  </p>
                  
                  <div className="mentor-expertise">
                    {mentor.expertise?.slice(0, 3).map((skill, index) => (
                      <span key={index} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mentor-actions">
                    <Link to={`/mentors/${mentor._id}`} className="btn btn-primary">
                      View Profile
                    </Link>
                    <button className="btn btn-outline">
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredMentors.length === 0 && (
              <div className="no-results">
                <h3>No mentors found</h3>
                <p>Try adjusting your search filters</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Mentors;