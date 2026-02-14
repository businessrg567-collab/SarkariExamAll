import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck, TrendingUp, ChevronRight, CheckCircle2, FileText, Briefcase, BookOpen, Mail, Instagram, Twitter,
  ArrowRight, ArrowLeft, Globe, Award, Users, ChevronDown, ChevronUp, Calendar, Bell, Send, Download, ExternalLink, Cpu, Search, Zap, Home,
  MapPin, Phone, MessageCircle, Building2, GraduationCap, Target, FileCheck, Menu, X, ClipboardList
} from 'lucide-react';
import EligibilityChecker from './components/EligibilityChecker';
import ExamHub from './components/ExamHub';
import EligibilityCheckerPage from './components/EligibilityCheckerPage';
import DocumentGuidePage from './components/DocumentGuidePage';
import PreparationGuidesPage from './components/PreparationGuidesPage';
import LocationGuidesPage from './components/LocationGuidesPage';
import ExamRequirementsPage from './components/ExamRequirementsPage';
import NotFoundPage from './components/NotFoundPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import { blogs } from './data/articles';
import { locations } from './data/locations';

gsap.registerPlugin(ScrollTrigger);

const handleImageError = (e) => {
  e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=60';
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

// UNIQUE PAGE DESIGNS - Each page has distinct layout and styling

const AboutPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="page-wrapper" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%)' }}>
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="grid-responsive" style={{ gap: '3rem', alignItems: 'start' }}>
          <div>
            <h1 className="gradient-text-gold" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '2rem' }}>About SarkariExamAll</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'white', marginBottom: '2rem' }}>
              India's premier educational portal dedicated to helping government job aspirants achieve their career goals since 2020.
            </p>
            <div className="grid-responsive" style={{ gap: '1.5rem', marginTop: '3rem' }}>
              <div className="glass-card" style={{ padding: '2rem', flex: 1, textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>100K+</h3>
                <p style={{ color: 'white' }}>Students Served</p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', flex: 1, textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>50+</h3>
                <p style={{ color: 'white' }}>Exams Covered</p>
              </div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={24} /> Our Mission
            </h2>
            <p style={{ color: 'white', lineHeight: '1.8', marginBottom: '2rem' }}>
              To provide accurate, timely, and comprehensive information about government examinations, eligibility criteria, and preparation strategies. We believe that every aspirant deserves access to reliable guidance regardless of their geographical or economic background.
            </p>
            <h2 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={24} /> What We Offer
            </h2>
            <ul style={{ color: 'white', lineHeight: '2', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Detailed exam guides and preparation strategies</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Interactive eligibility checkers</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Comprehensive document requirements</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Regular updates on notifications</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Expert-written 3000-word blog articles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStoriesPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  const stories = [
    {
      name: "Priya Sharma",
      exam: "UPSC CSE 2024",
      rank: "AIR 47",
      story: "SarkariExamAll was my go-to resource throughout my UPSC journey. The detailed eligibility checker helped me plan my attempts strategically, and the 3000-word preparation guides covered every nuance of the syllabus. The location-specific insights for Delhi exam centers were invaluable during my mains preparation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Rajesh Kumar",
      exam: "SSC CGL 2023",
      rank: "Selected as Income Tax Inspector",
      story: "Coming from a small town in Bihar, I had limited access to coaching. SarkariExamAll's comprehensive document guides and exam pattern analysis helped me prepare systematically. The eligibility checker confirmed my qualification status instantly, saving me weeks of confusion. Today, I'm serving the nation as an Income Tax Inspector.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Anjali Verma",
      exam: "IBPS PO 2024",
      rank: "Selected in SBI",
      story: "The banking exam preparation guides on SarkariExamAll are unmatched. Every article is 3000+ words of pure gold - covering syllabus, previous year trends, and preparation strategies. The AI-powered eligibility matcher helped me identify all banking exams I was eligible for, and I applied to 12 exams in one go!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "Vikram Singh",
      exam: "State PSC 2023",
      rank: "Selected as SDM",
      story: "The state-wise exam guides were a game-changer for me. SarkariExamAll provided detailed information about Rajasthan PSC that I couldn't find anywhere else. The notification tracker ensured I never missed a single update. From a confused aspirant to an SDM - this portal made it possible.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    }
  ];

  return (
    <div className="page-wrapper" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="gradient-text-gold" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1rem' }}>Success Stories</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            Real aspirants, real success. Read how thousands of students cracked their dream government exams with SarkariExamAll's guidance.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {stories.map((story, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
              <img src={story.image} alt={story.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--secondary)' }} />
              <div>
                <h3 style={{ color: 'var(--secondary)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{story.name}</h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.4rem 1rem', background: 'var(--glass)', border: '1px solid var(--secondary)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>{story.exam}</span>
                  <span style={{ padding: '0.4rem 1rem', background: 'var(--glass-light-green)', border: '1px solid var(--accent-green)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: 600 }}>{story.rank}</span>
                </div>
                <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.9', fontStyle: 'italic' }}>"{story.story}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: '3rem', marginTop: '4rem', textAlign: 'center', background: 'var(--glass)', border: '2px solid var(--secondary)' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '1rem' }}>Your Success Story Awaits</h2>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            Join 5 lakh+ aspirants who trust SarkariExamAll for their government exam preparation. Start your journey today with our comprehensive guides, eligibility checkers, and expert resources.
          </p>
          <button onClick={onBack} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Start Your Preparation <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CareerCounselingPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="gradient-text-purple" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1rem' }}>Career Counseling</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            Expert guidance to help you choose the right government exam path based on your qualifications, interests, and career goals.
          </p>
        </div>

        <div className="grid-responsive" style={{
          gap: '2rem',
          marginBottom: '5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--glass)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <GraduationCap size={28} color="var(--secondary)" />
            </div>
            <h3 style={{ color: 'var(--secondary)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Personalized Exam Roadmap</h3>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.7' }}>
              Our counselors analyze your educational background, age, and career aspirations to create a customized exam preparation roadmap. We help you identify the most suitable exams from UPSC, SSC, Banking, Railways, and State PSCs.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--glass-light-green)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Target size={28} color="var(--accent-green)" />
            </div>
            <h3 style={{ color: 'var(--accent-green)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Strategy & Time Management</h3>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.7' }}>
              Learn proven strategies from successful candidates. We provide detailed study plans, time management techniques, and preparation timelines for each exam. Our 3000-word guides cover every aspect from basics to advanced preparation.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--glass)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <FileText size={28} color="var(--secondary)" />
            </div>
            <h3 style={{ color: 'var(--secondary)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Document & Eligibility Guidance</h3>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.7' }}>
              Confused about eligibility criteria or required documents? Our experts clarify all doubts regarding age limits, educational qualifications, reservation policies, and document requirements for 50+ government exams.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--glass)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Users size={28} color="var(--secondary)" />
            </div>
            <h3 style={{ color: 'var(--secondary)', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Ongoing Mentorship</h3>
            <p style={{ color: 'white', fontSize: '1rem', lineHeight: '1.7' }}>
              Get continuous support throughout your preparation journey. Our mentors are available to answer your queries, review your progress, and provide motivation during challenging times. Join our community of 5L+ aspirants.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '4rem', background: 'rgba(15, 23, 42, 0.95)', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '2.2rem', marginBottom: '2rem' }}>Book Your Free Counseling Session</h2>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            Schedule a one-on-one session with our expert counselors. Get personalized advice on exam selection, preparation strategy, and career planning - absolutely free!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+918077583921" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Phone size={20} /> Call: +91 8077583921
            </a>
            <a href="mailto:info@sarkariexamall.com" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Mail size={20} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnerPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-wrapper" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}>
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="gradient-text-teal" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1rem' }}>Partner With Us</h1>
          <p style={{ fontSize: '1.2rem', color: 'white', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            Join India's fastest-growing government exam preparation platform. Collaborate with SarkariExamAll to reach millions of aspirants and grow your educational business.
          </p>
        </div>

        <div className="grid-responsive" style={{ gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Building2 size={32} /> Coaching Institute Partnership
            </h2>
            <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem' }}>
              Are you running a coaching institute for government exams? Partner with SarkariExamAll to expand your reach to 5 lakh+ active aspirants across India. We offer:
            </p>
            <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '2', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Featured listing on our platform with direct student inquiries</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Dedicated profile page with course details and success rates</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Priority placement in location-specific exam guides</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Access to our student database for targeted marketing</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Co-branded content and webinar opportunities</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '3rem', background: 'linear-gradient(135deg, var(--glass-light-green) 0%, var(--glass-dark-green) 100%)' }}>
            <h2 style={{ color: 'var(--accent-green)', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Globe size={32} /> Content Creator Collaboration
            </h2>
            <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem' }}>
              Are you an educator, blogger, or YouTuber creating government exam content? Collaborate with us to monetize your expertise:
            </p>
            <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '2', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--accent-green)" /> Publish your articles on our platform (3000+ word guides preferred)</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--accent-green)" /> Revenue sharing on premium content and courses</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--accent-green)" /> Author profile with social media links and credentials</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--accent-green)" /> Cross-promotion on our social channels (100K+ followers)</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--accent-green)" /> Performance-based bonuses and recognition</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Briefcase size={32} /> Corporate & Advertising Partnership
            </h2>
            <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem' }}>
              Reach a highly engaged audience of government job aspirants. Our advertising solutions include:
            </p>
            <ul style={{ color: 'white', fontSize: '1.05rem', lineHeight: '2', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Banner ads on high-traffic pages (1M+ monthly visitors)</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Sponsored content and native advertising</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Email marketing to our subscriber base (500K+ emails)</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Exam-specific targeting and demographic filters</li>
              <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}><CheckCircle2 size={20} color="var(--secondary)" /> Detailed analytics and ROI tracking</li>
            </ul>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem 0', textAlign: 'center', background: 'rgba(245, 158, 11, 0.05)' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '2rem' }}>Let's Grow Together</h2>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            Whether you're a coaching institute, content creator, or corporate advertiser, we have partnership models designed for mutual growth. Contact our partnership team to discuss opportunities.
          </p>
          <div className="grid-responsive" style={{ gap: '1rem', justifyContent: 'center' }}>
            <a href="mailto:partnerships@sarkariexamall.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Mail size={20} /> partnerships@sarkariexamall.com
            </a>
            <a href="tel:+918077583921" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Phone size={20} /> Call: +91 8077583921
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <h1 className="gradient-text-purple" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1rem' }}>Get In Touch</h1>
        <p style={{ fontSize: '1.1rem', color: 'white', marginBottom: '3rem' }}>
          Have questions about government exams? Our team is here to help you with personalized guidance.
        </p>
        <div className="grid-responsive" style={{ gap: '2rem' }}>
          <div>
            <h2 className="gradient-text-purple" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="form-input"
                  style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '2px solid var(--glass-border)', background: 'var(--glass)', color: 'white', fontSize: '1rem' }}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="form-input"
                  style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '2px solid var(--glass-border)', background: 'var(--glass)', color: 'white', fontSize: '1rem' }}
                  placeholder="yourname@gmail.com"
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="form-input"
                  style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '2px solid var(--glass-border)', background: 'var(--glass)', color: 'white', fontSize: '1rem' }}
                  placeholder="What is your query about?"
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="6"
                  className="form-input"
                  style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '2px solid var(--glass-border)', background: 'var(--glass)', color: 'white', fontSize: '1rem', resize: 'vertical' }}
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Send size={18} /> Send Message
              </button>
              {submitted && (
                <div style={{ padding: '1rem', background: 'var(--glass-light-green)', border: '2px solid var(--accent-green)', borderRadius: '10px', color: 'var(--accent-green)' }}>
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={24} /> Email Us
              </h3>
              <p style={{ color: 'white', marginBottom: '0.5rem' }}>General Inquiries:</p>
              <a href="mailto:info@sarkariexamall.com" style={{ color: 'var(--secondary)', textDecoration: 'none', fontSize: '1.1rem' }}>info@sarkariexamall.com</a>
              <p style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Support:</p>
              <a href="mailto:support@sarkariexamall.com" style={{ color: 'var(--secondary)', textDecoration: 'none', fontSize: '1.1rem' }}>support@sarkariexamall.com</a>
            </div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={24} /> Call Us Helpline
              </h3>
              <p style={{ color: 'white', marginBottom: '0.5rem' }}>Helpline (Mon-Sat, 9 AM - 6 PM):</p>
              <a href="tel:+918077583921" style={{ color: 'var(--secondary)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>+91 8077583921</a>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={24} /> Connect With Us
              </h3>
              <div className="grid-responsive" style={{ gap: '1rem' }}>
                <a href="#" style={{ padding: '1rem', background: 'var(--glass)', borderRadius: '10px', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Twitter size={24} />
                </a>
                <a href="#" style={{ padding: '1rem', background: 'var(--glass)', borderRadius: '10px', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Instagram size={24} />
                </a>
                <a href="#" style={{ padding: '1rem', background: 'var(--glass)', borderRadius: '10px', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedLocations = ({ currentId, onNavigate }) => {
  // Show 4 random other locations
  const related = locations
    .filter(l => l.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div style={{ marginTop: '4rem', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
      <h3 className="gradient-text-teal" style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Explore Other Cities</h3>
      <div className="grid-responsive">
        {related.map(location => (
          <div key={location.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }} onClick={() => onNavigate(location)}>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={location.image} alt={location.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={handleImageError} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} color="var(--secondary)" /> {location.name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'white', lineHeight: '1.6' }}>{location.excerpt.substring(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationPage = ({ location, onBack, onHome, onNavigate }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} /> Back
          </button>
          <button onClick={onHome} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={18} /> Home
          </button>
        </div>
        <div style={{ position: 'relative', height: '280px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          <img src={location.image} alt={location.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" onError={handleImageError} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }}></div>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <MapPin size={20} color="var(--secondary)" />
              <span style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem' }}>LOCATION GUIDE</span>
            </div>
            <h1 className="gradient-text-gold" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>{location.name}</h1>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <button onClick={onBack} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem' }}>
              <ArrowLeft size={18} /> Back
            </button>
          </div>
          <div className="dedicated-content" style={{ marginBottom: '3rem' }}>
            <div dangerouslySetInnerHTML={{ __html: location.content }} />
          </div>
          <RelatedLocations currentId={location.id} onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
};

const LocationsHub = ({ onSelectLocation, onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="container">
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="gradient-text-teal">City-Wise Exam Preparation Guide</h1>
          <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.1rem' }}>
            Explore city-specific exam centers, state opportunities, and local preparation resources
          </p>
          <div className="divider" style={{ margin: '1rem auto' }}></div>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 4rem', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search city, state, or exam center..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              paddingRight: '3rem',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1rem'
            }}
          />
          <Search size={20} color="var(--secondary)" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        <div className="blog-grid">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => (
              <div key={location.id} className="blog-card" onClick={() => onSelectLocation(location)} style={{ cursor: 'pointer' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={location.image} alt={location.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={handleImageError} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--secondary)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem' }}>
                    <MapPin size={14} style={{ display: 'inline', marginRight: '0.3rem' }} />
                    {location.name}
                  </div>
                </div>
                <div className="blog-content">
                  <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>{location.name} Exam Guide 2026</h3>
                  <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.7' }}>{location.excerpt}</p>
                  <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>
                    Explore Location Guide →
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
              <p>No cities found matching "{searchQuery}". Try different keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RelatedArticles = ({ currentId, category, onNavigate }) => {
  // Enhanced suggestion logic: same category first, then fill with others up to 6
  const sameCategory = blogs.filter(b => b.category === category && b.id !== currentId);
  const others = blogs.filter(b => b.category !== category && b.id !== currentId);
  const related = [...sameCategory, ...others].slice(0, 6);

  if (related.length === 0) return null;

  return (
    <div style={{ marginTop: '5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
      <h3 className="gradient-text-teal" style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>📖 Continue Your Preparation Journey</h3>
      <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {related.map((blog, index) => {
          // Different accent styles for variety
          const presets = [
            { bg: 'rgba(139, 92, 246, 0.05)', border: 'rgba(139, 92, 246, 0.2)', accent: '#A78BFA', icon: '🎯' },
            { bg: 'rgba(16, 185, 129, 0.05)', border: 'rgba(16, 185, 129, 0.2)', accent: '#10B981', icon: '📝' },
            { bg: 'rgba(245, 158, 11, 0.05)', border: 'rgba(245, 158, 11, 0.2)', accent: '#F59E0B', icon: '💼' },
            { bg: 'rgba(236, 72, 153, 0.05)', border: 'rgba(236, 72, 153, 0.2)', accent: '#EC4899', icon: '🚂' },
            { bg: 'rgba(59, 130, 246, 0.05)', border: 'rgba(59, 130, 246, 0.2)', accent: '#3B82F6', icon: '📚' },
            { bg: 'rgba(239, 68, 68, 0.05)', border: 'rgba(239, 68, 68, 0.2)', accent: '#EF4444', icon: '🎖️' }
          ];
          const style = presets[index % presets.length];

          return (
            <div
              key={blog.id}
              className="blog-card"
              onClick={() => onNavigate(blog)}
              style={{
                cursor: 'pointer',
                background: style.bg,
                border: `1px solid ${style.border}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={handleImageError} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(15, 23, 42, 0.8)', padding: '0.4rem', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  {style.icon}
                </div>
              </div>
              <div className="blog-content" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="blog-cat" style={{ color: style.accent, fontSize: '0.75rem', fontWeight: 700, border: `1px solid ${style.accent}`, padding: '2px 8px', borderRadius: '4px', width: 'fit-content' }}>{blog.category}</span>
                <h4 style={{ color: 'white', fontSize: '1.15rem', marginBottom: '0.8rem', marginTop: '1rem', lineHeight: '1.4' }}>{blog.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{blog.excerpt.substring(0, 90)}...</p>
                <span style={{ color: style.accent, fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Read Complete Guide →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ArticleDetail = ({ blog, onBack, onHome, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from('.article-content', { opacity: 1, y: 30, duration: 0.8, ease: 'power3.out' });
  }, [blog]);

  return (
    <div className="container" style={{ padding: '0 1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={18} /> Back
        </button>
        <button onClick={onHome} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Home size={18} /> Home
        </button>
      </div>
      <div className="article-content">
        <div style={{ position: 'relative', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '3rem', background: '#1E293B' }}>
          <img
            src={blog.image.replace('w=350', 'w=1000').replace('w=400', 'w=1000')}
            alt={blog.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            fetchPriority="high"
            onError={handleImageError}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }}></div>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <span className="blog-cat">{blog.category}</span>
            <h1 className="gradient-text-gold" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', marginTop: '0.5rem' }}>{blog.title}</h1>
          </div>
        </div>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button onClick={onBack} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem' }}>
            <ArrowLeft size={18} /> Back
          </button>
        </div>

        <div className="dedicated-content" style={{ marginBottom: '3rem' }}>
          <div style={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <RelatedArticles currentId={blog.id} category={blog.category} onNavigate={onNavigate} />
      </div>
    </div>
  );
};


const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL path to activeTab mapping
  const getActiveTabFromPath = (pathname) => {
    const pathMap = {
      '/': 'Home',
      '/blog': 'Blog',
      '/about': 'About',
      '/contact': 'Contact',
      '/locations': 'Locations',
      '/success-stories': 'Success',
      '/career-counseling': 'Counseling',
      '/partner': 'Partner',
      '/eligibility-checker': 'EligibilityChecker',
      '/document-guide': 'DocumentGuide',
      '/exam-requirements': 'ExamRequirements',
      '/preparation-guides': 'PreparationGuides',
      '/location-guides': 'LocationGuides',
      '/privacy-policy': 'PrivacyPolicy',
      '/terms-of-service': 'TermsOfService',
    };

    // Check for dynamic routes
    const pathValues = pathname.split('/').filter(Boolean);

    // Support /[slug] (deprecated but kept for compatibility)
    if (pathValues.length === 1 && !['about', 'contact', 'locations', 'success-stories', 'career-counseling', 'partner', 'eligibility-checker', 'document-guide', 'exam-requirements', 'preparation-guides', 'location-guides', 'privacy-policy', 'terms-of-service'].includes(pathValues[0])) {
      const slug = pathValues[0];
      if (blogs.some(b => b.slug === slug || b.id === slug)) return 'Detail';
    }

    // Support /blog/[slug] (New preferred structure)
    if (pathValues.length === 2 && pathValues[0] === 'blog') {
      const slug = pathValues[1];
      if (blogs.some(b => b.slug === slug || b.id === slug)) return 'Detail';
    }

    if (pathname.startsWith('/locations/')) return 'Location';

    // Return NotFound for invalid URLs
    return pathMap[pathname] || 'NotFound';
  };

  // activeTab to URL path mapping
  const getPathFromActiveTab = (tab) => {
    const tabMap = {
      'Home': '/',
      'Blog': '/blog',
      'Detail': '/blog',
      'About': '/about',
      'Contact': '/contact',
      'Locations': '/locations',
      'Location': '/locations',
      'Success': '/success-stories',
      'Counseling': '/career-counseling',
      'Partner': '/partner',
      'EligibilityChecker': '/eligibility-checker',
      'DocumentGuide': '/document-guide',
      'ExamRequirements': '/exam-requirements',
      'PreparationGuides': '/preparation-guides',
      'LocationGuides': '/location-guides',
      'PrivacyPolicy': '/privacy-policy',
      'TermsOfService': '/terms-of-service',
    };
    return tabMap[tab] || '/';
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath(location.pathname));
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // For blog search
  const [previousTab, setPreviousTab] = useState('Home'); // Default to Home
  const [homeScrollPos, setHomeScrollPos] = useState(0);

  // Restore scroll position when returning to Home
  useEffect(() => {
    if (activeTab === 'Home') {
      // Use setTimeout to ensure rendering is done
      setTimeout(() => {
        window.scrollTo(0, homeScrollPos);
      }, 0);
    }
  }, [activeTab]);

  // Sync activeTab with URL changes
  useEffect(() => {
    const newTab = getActiveTabFromPath(location.pathname);
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }

    // Extract blog slug or location from URL if present
    const pathValues = location.pathname.split('/').filter(Boolean);

    // Support /[slug]
    if (pathValues.length === 1 && !['about', 'contact', 'locations', 'success-stories', 'career-counseling', 'partner', 'eligibility-checker', 'document-guide', 'exam-requirements', 'preparation-guides', 'location-guides', 'privacy-policy', 'terms-of-service'].includes(pathValues[0])) {
      const slug = pathValues[0];
      const blog = blogs.find(b => (b.slug === slug) || (b.id === slug));

      if (blog) {
        setSelectedBlog(blog);
        if (activeTab !== 'Detail') setActiveTab('Detail');
      }
    }

    // Support /blog/[slug]
    if (pathValues.length === 2 && pathValues[0] === 'blog') {
      const slug = pathValues[1];
      const blog = blogs.find(b => (b.slug === slug) || (b.id === slug));

      if (blog) {
        setSelectedBlog(blog);
        if (activeTab !== 'Detail') setActiveTab('Detail');
      }
    }

    if (location.pathname.startsWith('/locations/')) {
      const citySlug = location.pathname.split('/locations/')[1];
      // Try to match by slug first, then fallback to name manipulation (for backward compatibility if needed)
      const loc = locations.find(l => l.slug === citySlug || l.name.toLowerCase().replace(/\s+/g, '-') === citySlug);
      if (loc) {
        setSelectedLocation(loc);
        if (activeTab !== 'Location') setActiveTab('Location');
      }
    }
  }, [location.pathname]);

  // Custom setActiveTab that also updates URL
  const navigateToTab = (tab, blogOrLocation = null) => {
    if (activeTab !== tab) {
      setPreviousTab(activeTab); // Store current tab before switching
      // Save scroll position if leaving Home
      if (activeTab === 'Home') {
        setHomeScrollPos(window.scrollY);
      }
    }
    setActiveTab(tab);

    // Always scroll to top when navigating
    window.scrollTo(0, 0);

    if (tab === 'Detail' && blogOrLocation) {
      setSelectedBlog(blogOrLocation);
      navigate(`/blog/${blogOrLocation.slug || blogOrLocation.id}`);
    } else if (tab === 'Location' && blogOrLocation) {
      setSelectedLocation(blogOrLocation);
      // Use the explicit slug from locations.js
      navigate(`/locations/${blogOrLocation.slug}`);
    } else {
      const path = getPathFromActiveTab(tab);
      navigate(path);
    }
  };

  const handleBack = () => {
    // Navigate back in history if possible
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to Home if no history
      navigateToTab('Home');
    }
  };

  useEffect(() => {
    // Animations disabled for ultra-stable UI as requested
    gsap.set('.reveal', { opacity: 1, y: 0 });
  }, [activeTab, selectedBlog, selectedLocation]);

  const renderHome = () => (
    <>
      <header className="hero">
        <div className="container" style={{ position: 'relative' }}>
          <div className="reveal">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div className="hero-badge">
                <CheckCircle2 size={14} color="var(--accent-green)" />
                <span>OFFICIAL 2026 VERIFIED PORTAL</span>
              </div>
            </div>

            <h1 className="hero-brand-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', fontWeight: 600 }}>India's Trusted Exam Platform</h1>
            <h2 className="hero-tagline">Official Govt Exam Portal</h2>

            <p className="hero-description">
              Your one-stop destination for verified exam notifications, eligibility checks, and expert preparation strategies. Join 5 lakh+ aspirants achieving their government job dreams!
            </p>

            {/* Trust Stats Counter */}
            {/* Trust Stats Counter */}
            <div className="grid-responsive" style={{ gap: '1.5rem', marginTop: '2rem', marginBottom: '3rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="stats-number" style={{ color: 'var(--secondary)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>5L+</div>
                <div className="stats-label" style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-dim)' }}>Active Aspirants</div>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="stats-number" style={{ color: '#10B981', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>50+</div>
                <div className="stats-label" style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-dim)' }}>Exam Bodies</div>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="stats-number" style={{ color: '#8B5CF6', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>100%</div>
                <div className="stats-label" style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-dim)' }}>Official Data</div>
              </div>
            </div>

            {/* Trust Icons */}
            <div style={{ marginBottom: '2rem' }}>

              <div className="trust-tags">
                <div className="trust-tag">UPSC</div>
                <div className="trust-tag">SSC</div>
                <div className="trust-tag">IBPS</div>
                <div className="trust-tag">RRB</div>
                <div className="trust-tag">State PSC</div>
                <div className="trust-tag">Banking</div>
              </div>
            </div>

            <div className="grid-responsive" style={{ gap: '1rem' }}>
              <a href="#hub" className="btn btn-primary">
                Document Hub <ChevronRight size={18} />
              </a>
              <a href="#checker" className="btn btn-secondary">
                Check Eligibility
              </a>
            </div>

          </div>
        </div>
      </header>

      <section id="hub" style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container">
          <div className="section-title reveal" style={{ marginBottom: '3rem' }}>
            <h2 className="gradient-text-teal">Comprehensive Exam Documentation Hub</h2>
            <p style={{ color: 'white', marginTop: '1rem' }}>Complete document requirements and qualification criteria for all major 2026 government recruitments.</p>
            <div className="divider"></div>
          </div>
          <ExamHub />
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => navigateToTab('DocumentGuide')} className="btn btn-primary" style={{ marginRight: '1rem' }}>
              <FileText size={18} /> View Full Document Guide
            </button>
            <button onClick={() => navigateToTab('ExamRequirements')} className="btn btn-secondary">
              <ClipboardList size={18} /> Exam Requirements
            </button>
          </div>
        </div>
      </section>

      <section id="checker" style={{ padding: 'var(--section-padding) 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="grid-responsive">
            <div className="reveal">
              <h2 className="gradient-text-purple">Intelligent Eligibility Matcher</h2>
              <p style={{ margin: '1.5rem 0 2rem', color: 'white', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Our advanced algorithm analyzes 50+ central and state government notifications to instantly match you with eligible 2026 examinations based on your age and educational qualification.
              </p>
              <EligibilityChecker />
              <div style={{ marginTop: '2rem' }}>
                <button onClick={() => navigateToTab('EligibilityChecker')} className="btn btn-primary">
                  <ShieldCheck size={18} /> Open Full Eligibility Checker
                </button>
              </div>
            </div>
            <div className="reveal glass-card" style={{ textAlign: 'center', border: 'none', background: 'var(--trust-blue)', padding: '2rem' }}>
              <Cpu size={48} color="var(--secondary)" />
              <h3 style={{ marginTop: '1.5rem', color: 'white' }}>AI-Powered Verification System</h3>
              <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'white', lineHeight: '1.7' }}>
                Our algorithms scan official government gazettes daily to maintain the most accurate and up-to-date eligibility database. No manual searching required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header-blog reveal">
            <div className="section-title-blog">
              <h2 className="gradient-text-gold">Expert Knowledge Blog</h2>
              <p style={{ color: 'white', marginTop: '0.5rem' }}>In-depth 3000-word guides written by exam experts and successful candidates</p>
              <div className="divider" style={{ margin: '1.5rem 0' }}></div>
            </div>
            <div className="view-all-wrapper">
              <button onClick={() => setActiveTab('Blog')} className="btn btn-secondary view-all-btn">
                View All Articles <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="blog-grid">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="blog-card reveal" onClick={() => navigateToTab('Detail', blog)}>
                <div style={{ height: '200px', overflow: 'hidden', background: '#1E293B' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }}
                    className="blog-img"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <div className="blog-content">
                  <span className="blog-cat">{blog.category}</span>
                  <h3 className="blog-title" style={{ color: 'white', fontSize: '1.2rem' }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'white', margin: '1rem 0' }}>{blog.excerpt}</p>
                  <span style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Read Complete Guide →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="section-title reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="gradient-text-teal">Top Cities for Exam Preparation</h2>
            <p style={{ color: 'white', marginTop: '0.5rem' }}>Discover exam centers, career opportunities, and preparation resources across India's major cities</p>
            <div className="divider" style={{ margin: '0.5rem auto' }}></div>
          </div>
          <div className="grid grid-3 reveal">
            {locations.slice(0, 6).map((location) => (
              <div key={location.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigateToTab('Location', location)}>
                <div style={{ height: '240px', overflow: 'hidden', background: '#1E293B' }}>
                  <img
                    src={location.image}
                    alt={location.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} color="var(--secondary)" /> {location.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'white', lineHeight: '1.6' }}>{location.excerpt.substring(0, 80)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage Newsletter Section */}
      <section className="homepage-newsletter">
        <div className="container">
          <div className="glass-card reveal" style={{
            padding: '2rem 1rem',
            textAlign: 'center',
            border: '1px solid var(--secondary)',
            background: 'rgba(139, 92, 246, 0.03)',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} color="var(--secondary)" />
              </div>
            </div>
            <h2 className="gradient-text-purple" style={{ marginBottom: '0.8rem', fontSize: '1.8rem' }}>Never Miss An Update</h2>
            <p style={{ color: 'white', opacity: 0.9, maxWidth: '550px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: '1.6' }}>
              Get verified notification alerts, eligibility changes, and 2026 recruitment guides delivered directly to your inbox.
            </p>

            <div style={{ maxWidth: '550px', margin: '0 auto', display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input"
                style={{ flex: '1', minWidth: '250px', padding: '1rem 1.2rem', borderRadius: '50px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', fontSize: '0.95rem' }}
              />
              <button
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.95rem' }}
                onClick={() => alert('Welcome to the inner circle! You will receive verified updates shortly.')}
              >
                Join Now <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Phone size={20} color="var(--secondary)" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>Helpline Number</p>
                  <a href="tel:+918077583921" style={{ color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>+91 8077583921</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Mail size={20} color="var(--secondary)" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>Support Email</p>
                  <a href="mailto:info@sarkariexamall.com" style={{ color: 'white', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>info@sarkariexamall.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="grid grid-3 reveal">
            {[
              { icon: <Award />, title: 'Gazette Verified', desc: 'Every data point cross-referenced with official government publications and notifications.' },
              { icon: <Users />, title: '100K+ Community', desc: 'Join thousands of successful candidates who trust our guidance and preparation resources.' },
              { icon: <ShieldCheck />, title: 'Privacy First', desc: 'Zero personal data storage. All eligibility checks processed locally on your device.' }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', border: 'none', padding: '2rem' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-title reveal" style={{ textAlign: 'center' }}>
            <h2 className="gradient-text-purple">Frequently Asked Questions</h2>
            <p style={{ color: 'white', marginTop: '0.5rem' }}>Quick answers to common queries from government exam aspirants</p>
            <div className="divider" style={{ margin: '0.5rem auto' }}></div>
          </div>
          <div className="reveal" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <FAQItem
              question="When will UPSC CSE 2026 notification be released?"
              answer="Historically, the UPSC Civil Services Examination 2026 notification is scheduled for release in mid-February 2026. However, preparation should ideally start 12-18 months in advance. Our portal provides a daily 'Notification Tracker' to ensure you never miss an official update from the commission. Pro Tip: Focus on Current Affairs from June 2025 onwards for the 2026 attempt."
            />
            <FAQItem
              question="Can I apply for government exams if I am in my final year of graduation?"
              answer="Yes, most premier exams (UPSC, SSC CGL, IBPS) allow final-year students to apply provisionally. The condition is that you must provide proof of passing by the time of the Interview or Document Verification. Check our 'Eligibility Checker' above—it's specifically designed to help final-year students identify 2026 opportunities they can target."
            />
            <FAQItem
              question="What is the difference between SSC CGL and SSC CHSL?"
              answer="SSC CGL (Combined Graduate Level) is for degree holders and offers Group B & C posts like Income Tax Inspector or Assistant Section Officer. SSC CHSL (Combined Higher Secondary Level) is for 12th pass students, recruiting for posts like LDC and DEO. CGL generally has higher pay scales and more competitive promotion paths, while CHSL is a great entry point into central government service."
            />
            <FAQItem
              question="How many attempts are allowed for banking exams?"
              answer="Unlike the UPSC, most banking examinations (IBPS PO, SBI PO, RBI Grade B) do not have a limit on the number of attempts. You can keep appearing as long as you fall within the age bracket (typically 20-30 years for PO and 20-28 for Clerk). Age relaxations apply for OBC, SC, ST, and PwD candidates as per government norms."
            />
            <FAQItem
              question="Which government exam is the easiest to crack in 2026?"
              answer="No exam is truly 'easy' due to the competition, but exams like SSC MTS, State Police Recruitments, and RRB Group D are generally considered more accessible due to their qualification requirements and syllabus depth. However, we recommend choosing an exam based on your interest and strength rather than perceived difficulty. Use our 'Expert Blog' to compare syllabi and make an informed choice."
            />          </div>
        </div>
      </section>
    </>
  );

  const renderBlog = () => {
    // Filter blogs based on search (uses component-level searchQuery state)
    const filteredBlogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="section-title reveal" style={{ textAlign: 'center' }}>
            <h1 className="gradient-text-teal">Expert Knowledge Blog</h1>
            <p style={{ color: 'white', marginTop: '1rem' }}>30+ comprehensive guides covering every aspect of government exam preparation for 2026</p>
            <div className="divider"></div>
          </div>

          {/* Search Bar */}
          <div style={{ maxWidth: '600px', margin: '3rem auto 0', position: 'relative' }}>
            <input
              type="text"
              placeholder="Search exam guides, notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                paddingRight: '3rem',
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <Search size={20} color="var(--secondary)" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          <div className="blog-grid" style={{ marginTop: '4rem' }}>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id} className="blog-card reveal" onClick={() => navigateToTab('Detail', blog)}>
                  <div style={{ height: '220px', overflow: 'hidden', background: '#1E293B' }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={handleImageError}
                    />
                  </div>
                  <div className="blog-content">
                    <span className="blog-cat">{blog.category}</span>
                    <h3 className="blog-title" style={{ color: 'white' }}>{blog.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white' }}>{blog.excerpt}</p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
                <p>No articles found matching "{searchQuery}". Try different keywords.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ background: 'var(--primary)', color: 'white', minHeight: '100vh' }}>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setSelectedBlog(null); setSelectedLocation(null); navigateToTab('Home'); setIsMenuOpen(false); }} className="nav-brand">
            SarkariExam<span>All</span>
          </a>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#hub" onClick={(e) => { e.preventDefault(); setSelectedBlog(null); setSelectedLocation(null); navigateToTab('Home'); }} style={{ color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Exam Hub</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedBlog(null); setSelectedLocation(null); navigateToTab('Blog'); }} style={{ color: activeTab === 'Blog' ? 'var(--secondary)' : 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Blog</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedBlog(null); setSelectedLocation(null); navigateToTab('Locations'); }} style={{ color: activeTab === 'Locations' ? 'var(--secondary)' : 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Top Cities</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Contact'); }} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Get In Touch</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-toggle" style={{ display: 'none' }}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 1000
          }}>
            <a href="#hub" onClick={(e) => { e.preventDefault(); navigateToTab('Home'); setIsMenuOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>Exam Hub</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Blog'); setIsMenuOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>Expert Blog</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Locations'); setIsMenuOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>Top Cities</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Contact'); setIsMenuOpen(false); }} className="btn btn-primary" style={{ justifyContent: 'center' }}>Get In Touch</a>
          </div>
        )}
      </nav>


      <main role="main" style={{ minHeight: '80vh' }}>
        {activeTab === 'Home' && renderHome()}
        {activeTab === 'Blog' && renderBlog()}
        {activeTab === 'Detail' && selectedBlog && <ArticleDetail blog={selectedBlog} onBack={handleBack} onHome={() => navigateToTab('Home')} onNavigate={(blog) => navigateToTab('Detail', blog)} />}
        {activeTab === 'About' && <AboutPage onBack={handleBack} />}
        {activeTab === 'Success' && <SuccessStoriesPage onBack={handleBack} />}
        {activeTab === 'Counseling' && <CareerCounselingPage onBack={handleBack} />}
        {activeTab === 'Partner' && <PartnerPage onBack={handleBack} />}
        {activeTab === 'Contact' && <ContactPage onBack={handleBack} />}
        {activeTab === 'Locations' && <LocationsHub onSelectLocation={(loc) => navigateToTab('Location', loc)} onBack={handleBack} />}
        {activeTab === 'Location' && selectedLocation && <LocationPage location={selectedLocation} onBack={handleBack} onHome={() => navigateToTab('Home')} onNavigate={(loc) => navigateToTab('Location', loc)} />}
        {activeTab === 'EligibilityChecker' && <EligibilityCheckerPage onBack={handleBack} />}
        {activeTab === 'DocumentGuide' && <DocumentGuidePage onBack={handleBack} onNavigateToExamRequirements={() => navigateToTab('ExamRequirements')} />}
        {activeTab === 'ExamRequirements' && <ExamRequirementsPage onBack={handleBack} />}
        {activeTab === 'PreparationGuides' && <PreparationGuidesPage onSelectBlog={(blog) => navigateToTab('Detail', blog)} onBack={handleBack} />}
        {activeTab === 'LocationGuides' && <LocationGuidesPage onSelectLocation={(loc) => navigateToTab('Location', loc)} onBack={handleBack} />}
        {activeTab === 'PrivacyPolicy' && <PrivacyPolicyPage onBack={handleBack} />}
        {activeTab === 'TermsOfService' && <TermsOfServicePage onBack={handleBack} />}
        {activeTab === 'NotFound' && <NotFoundPage />}
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>

            {/* Col 1: Brand */}
            <div className="footer-col">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Home'); }} className="nav-brand" style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'block' }}>
                SarkariExam<span>All</span>
              </a>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                India's #1 trusted platform for government exam preparation, eligibility checks, and real-time result updates.
              </p>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--secondary)' }}>
                <Twitter size={20} style={{ cursor: 'pointer' }} />
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Mail size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Quick Links</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Home'); }}>Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('About'); }}>About Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Contact'); }}>Contact</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('PrivacyPolicy'); }}>Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('TermsOfService'); }}>Terms of Service</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Services</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('EligibilityChecker'); }}>Eligibility Checker</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('DocumentGuide'); }}>Document Guide</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('PreparationGuides'); }}>Study Material</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('LocationGuides'); }}>Exam Centers</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Counseling'); }}>Career Counseling</a></li>
              </ul>
            </div>

            {/* Col 4: Top Cities (Explicitly separate) */}
            <div className="footer-col" style={{ gridColumn: 'span 1' }}>
              <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Top Cities</h4>
              <ul style={{ columns: 2, gap: '1rem' }}>
                {locations.slice(0, 8).map(loc => (
                  <li key={loc.id} style={{ marginBottom: '0.4rem' }}><a href="#" onClick={(e) => { e.preventDefault(); navigateToTab('Location', loc); }} style={{ fontSize: '0.85rem' }}>{loc.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact Info */}
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Contact Us</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Join India's most trusted platform for verified government exam intelligence.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a href="tel:+918077583921" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <Phone size={16} color="var(--secondary)" /> +91 8077583921
                </a>
                <a href="mailto:info@sarkariexamall.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <Mail size={16} color="var(--secondary)" /> info@sarkariexamall.com
                </a>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            <p>&copy; 2026 SarkariExamAll. Built with ❤️ for Aspirants.</p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default App;
