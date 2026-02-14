import React, { useEffect } from 'react';
import { Home, MapPin, Building2, GraduationCap, Hotel, Briefcase, TrendingUp, Users, Award, Target, ArrowLeft } from 'lucide-react';
import { locations } from '../data/locations';

const LocationGuidesPage = ({ onSelectLocation, onBack, onHome }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const handleImageError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=60';
    };

    const regionalGroups = {
        'North': ['Delhi', 'Chandigarh', 'Lucknow', 'Jaipur'],
        'South': ['Chennai', 'Bangalore', 'Hyderabad', 'Thiruvananthapuram'],
        'East': ['Kolkata', 'Patna', 'Bhubaneswar', 'Guwahati'],
        'West': ['Mumbai', 'Ahmedabad', 'Pune'],
        'Central': ['Bhopal', 'Indore', 'Raipur']
    };

    const getLocationsByRegion = (region) => {
        const cityNames = regionalGroups[region] || [];
        return locations.filter(loc => cityNames.includes(loc.name));
    };

    const examCenterBenefits = [
        {
            title: "Strategic Location Advantage",
            description: "Major cities host exam centers for all premier exams - UPSC, SSC, Banking, Railways. No need to travel to other states for exams.",
            icon: <MapPin size={32} color="#06B6D4" />
        },
        {
            title: "Quality Coaching Hubs",
            description: "Access to India's best coaching institutes with experienced faculty, comprehensive study material, and proven track records.",
            icon: <GraduationCap size={32} color="#06B6D4" />
        },
        {
            title: "Peer Learning Environment",
            description: "Study alongside thousands of serious aspirants. Join study groups, participate in group discussions, and stay motivated.",
            icon: <Users size={32} color="#06B6D4" />
        },
        {
            title: "Affordable Accommodation",
            description: "PG accommodations, hostels, and shared flats available at reasonable rates near coaching hubs and exam centers.",
            icon: <Hotel size={32} color="#06B6D4" />
        },
        {
            title: "Career Opportunities",
            description: "After selection, major cities offer better posting opportunities, career growth, and professional development.",
            icon: <Briefcase size={32} color="#06B6D4" />
        },
        {
            title: "State PSC Opportunities",
            description: "Each state capital conducts its own PSC exams. Being in the state gives you an edge for state-level opportunities.",
            icon: <Award size={32} color="#06B6D4" />
        }
    ];

    const preparationResources = [
        {
            city: "Delhi",
            coachingHubs: "Mukherjee Nagar, Old Rajinder Nagar, Karol Bagh",
            libraries: "Vijay Nagar Library, UPSC Library, Delhi Public Library",
            accommodation: "₹5,000-12,000/month",
            speciality: "UPSC & SSC Coaching Capital"
        },
        {
            city: "Mumbai",
            coachingHubs: "Dadar, Andheri, Borivali",
            libraries: "Asiatic Society Library, Mumbai University Library",
            accommodation: "₹8,000-15,000/month",
            speciality: "Banking & Insurance Hub"
        },
        {
            city: "Bangalore",
            coachingHubs: "Jayanagar, Malleshwaram, Rajajinagar",
            libraries: "State Central Library, British Library",
            accommodation: "₹6,000-12,000/month",
            speciality: "Technical & Defence Exams"
        },
        {
            city: "Kolkata",
            coachingHubs: "College Street, Park Street, Salt Lake",
            libraries: "National Library, Ramakrishna Mission Library",
            accommodation: "₹4,000-10,000/month",
            speciality: "WBCS & Railway Exams"
        }
    ];

    const statePSCInfo = [
        {
            state: "Uttar Pradesh",
            commission: "UPPSC",
            majorExams: ["UPPCS", "PCS-J", "RO/ARO", "Lecturer"],
            annualVacancies: "2000+",
            examCenter: "Lucknow (Main), Prayagraj, Kanpur"
        },
        {
            state: "Maharashtra",
            commission: "MPSC",
            majorExams: ["MPSC Prelims", "State Services", "Police SI", "Excise Inspector"],
            annualVacancies: "1500+",
            examCenter: "Mumbai, Pune, Nagpur"
        },
        {
            state: "Tamil Nadu",
            commission: "TNPSC",
            majorExams: ["Group I", "Group II", "Group IV", "VAO"],
            annualVacancies: "3000+",
            examCenter: "Chennai (Main), Coimbatore, Madurai"
        },
        {
            state: "Karnataka",
            commission: "KPSC",
            majorExams: ["KAS", "FDA/SDA", "Police SI", "Forest Guard"],
            annualVacancies: "1000+",
            examCenter: "Bangalore (Main), Mysore, Hubli"
        },
        {
            state: "West Bengal",
            commission: "WBPSC",
            majorExams: ["WBCS", "Clerkship", "Miscellaneous", "School Service"],
            annualVacancies: "2500+",
            examCenter: "Kolkata (Main), Siliguri"
        }
    ];

    return (
        <div className="page-wrapper">
            <div className="container">
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button onClick={onBack} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ArrowLeft size={18} /> Back
                    </button>
                    <button onClick={onHome} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Home size={18} /> Home
                    </button>
                </div>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.5rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '2px solid #06B6D4',
                        borderRadius: '30px',
                        marginBottom: '2rem'
                    }}>
                        <MapPin size={18} color="#06B6D4" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#06B6D4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            20 Major Indian Cities Covered
                        </span>
                    </div>

                    <h1 className="gradient-text-teal" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Location Guides
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'white',
                        maxWidth: '100%',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        opacity: 0.95
                    }}>
                        Comprehensive city-wise guides covering exam centers, state PSC opportunities, coaching hubs, accommodation options, and career prospects. Make informed decisions about where to prepare and appear for exams.
                    </p>

                    <div className="grid-responsive" style={{ gap: '1.5rem' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#06B6D4', marginBottom: '0.5rem' }}>20</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Major Cities</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#06B6D4', marginBottom: '0.5rem' }}>28</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>State PSCs</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#06B6D4', marginBottom: '0.5rem' }}>500+</div>
                            <div style={{ color: 'white', fontSize: '0.9rem' }}>Coaching Institutes</div>
                        </div>
                    </div>
                </div>

                {/* Regional City Groups */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 50%, #67E8F9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Explore Cities by Region
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', width: '100%', margin: '0 auto', lineHeight: '1.7' }}>
                            Select your preferred region to explore detailed city guides with exam centers, coaching hubs, and opportunities.
                        </p>
                    </div>

                    {Object.entries(regionalGroups).map(([region, cities]) => {
                        const regionLocations = getLocationsByRegion(region);
                        if (regionLocations.length === 0) return null;

                        return (
                            <div key={region} style={{ marginBottom: '4rem' }}>
                                <div className="dedicated-content" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    marginBottom: '2rem',
                                    background: 'rgba(6, 182, 212, 0.05)',
                                    borderRadius: '12px',
                                    border: '2px solid rgba(6, 182, 212, 0.2)'
                                }}>
                                    <MapPin size={24} color="#06B6D4" />
                                    <h3 style={{ color: '#06B6D4', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                                        {region} India
                                    </h3>
                                    <div style={{
                                        padding: '0.4rem 1rem',
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        border: '2px solid #06B6D4',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        color: '#06B6D4'
                                    }}>
                                        {regionLocations.length} Cities
                                    </div>
                                </div>

                                <div className="blog-grid">
                                    {regionLocations.map((location) => (
                                        <div
                                            key={location.id}
                                            className="blog-card"
                                            onClick={() => onSelectLocation(location)}
                                            style={{
                                                cursor: 'pointer',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '2px solid rgba(6, 182, 212, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative', background: '#1E293B' }}>
                                                <img
                                                    src={location.image}
                                                    alt={location.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    loading="lazy"
                                                    onError={handleImageError}
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '1rem',
                                                    right: '1rem',
                                                    background: '#06B6D4',
                                                    color: 'white',
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '20px',
                                                    fontWeight: 700,
                                                    fontSize: '0.85rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.3rem'
                                                }}>
                                                    <MapPin size={14} />
                                                    {location.name}
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>
                                                    {location.name} Exam Guide 2026
                                                </h3>
                                                <p style={{ fontSize: '0.95rem', color: 'white', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                                    {location.excerpt}
                                                </p>
                                                <span style={{ color: '#06B6D4', fontSize: '0.9rem', fontWeight: 600 }}>
                                                    Explore Complete Location Guide →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Why Location Matters */}
                <div className="dedicated-content" style={{
                    marginBottom: '5rem',
                    background: 'rgba(6, 182, 212, 0.03)',
                    border: '2px solid rgba(6, 182, 212, 0.2)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#06B6D4', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            Why Location Matters for Exam Preparation
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', width: '100%', margin: '0 auto' }}>
                            Choosing the right city for preparation can significantly impact your success. Here's why location is crucial.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{ gap: '2.5rem' }}>
                        {examCenterBenefits.map((benefit, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                border: '2px solid rgba(6, 182, 212, 0.2)',
                                width: '100%'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {benefit.icon}
                                </div>
                                <h3 style={{ color: '#06B6D4', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                                    {benefit.title}
                                </h3>
                                <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coaching & Accommodation Info */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 50%, #67E8F9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Coaching Hubs & Accommodation
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', width: '100%', margin: '0 auto', lineHeight: '1.7' }}>
                            Key information about coaching centers, libraries, and affordable accommodation in major cities.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {preparationResources.map((resource, idx) => (
                            <div key={idx} className="dedicated-content" style={{
                                background: 'rgba(6, 182, 212, 0.03)',
                                border: '2px solid rgba(6, 182, 212, 0.2)',
                                marginBottom: '2rem'
                            }}>
                                <div className="grid-responsive" style={{ gap: '3rem', alignItems: 'start' }}>
                                    <div style={{ width: '100%' }}>
                                        <h3 style={{ color: '#06B6D4', fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>
                                            {resource.city}
                                        </h3>
                                        <div style={{
                                            padding: '0.6rem 1.2rem',
                                            background: 'rgba(6, 182, 212, 0.1)',
                                            border: '2px solid #06B6D4',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: 700,
                                            color: '#06B6D4',
                                            textAlign: 'center',
                                            width: 'fit-content'
                                        }}>
                                            {resource.speciality}
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                                        <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
                                            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <GraduationCap size={16} />
                                                Coaching Hubs
                                            </div>
                                            <p style={{ color: 'white', fontSize: '1rem', margin: 0 }}>{resource.coachingHubs}</p>
                                        </div>

                                        <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
                                            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Building2 size={16} />
                                                Major Libraries
                                            </div>
                                            <p style={{ color: 'white', fontSize: '1rem', margin: 0 }}>{resource.libraries}</p>
                                        </div>

                                        <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
                                            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Hotel size={16} />
                                                Accommodation Cost
                                            </div>
                                            <p style={{ color: 'white', fontSize: '1rem', margin: 0 }}>{resource.accommodation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* State PSC Information */}
                <div className="dedicated-content" style={{
                    marginBottom: '5rem',
                    background: 'rgba(245, 158, 11, 0.03)',
                    border: '2px solid rgba(245, 158, 11, 0.2)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: '#F59E0B', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1rem' }}>
                            State PSC Opportunities
                        </h2>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: '1.7', width: '100%', margin: '0 auto' }}>
                            Each state conducts its own Public Service Commission exams. Explore opportunities in major states.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {statePSCInfo.map((psc, idx) => (
                            <div key={idx} className="glass-card" style={{
                                padding: '2rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '16px',
                                border: '2px solid rgba(245, 158, 11, 0.2)',
                                marginBottom: '1.5rem',
                                width: '100%'
                            }}>
                                <div className="grid-responsive" style={{ gap: '2rem', alignItems: 'start' }}>
                                    <div style={{ width: '100%' }}>
                                        <h3 style={{ color: '#F59E0B', fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                                            {psc.state}
                                        </h3>
                                        <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>
                                            {psc.commission}
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                                            Major Exams Conducted:
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                            {psc.majorExams.map((exam, i) => (
                                                <div key={i} style={{
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(245, 158, 11, 0.1)',
                                                    border: '1px solid rgba(245, 158, 11, 0.3)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: 'white'
                                                }}>
                                                    {exam}
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
                                            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                                                Exam Centers:
                                            </div>
                                            <div style={{ color: 'white', fontSize: '0.95rem' }}>{psc.examCenter}</div>
                                        </div>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            padding: '1.5rem',
                                            background: 'rgba(245, 158, 11, 0.1)',
                                            border: '2px solid #F59E0B',
                                            borderRadius: '12px'
                                        }}>
                                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.3rem' }}>
                                                {psc.annualVacancies}
                                            </div>
                                            <div style={{ color: 'white', fontSize: '0.85rem' }}>
                                                Annual Vacancies
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="dedicated-content" style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 116, 144, 0.1) 100%)',
                    border: '2px solid #06B6D4'
                }}>
                    <h2 style={{ color: '#06B6D4', fontSize: 'clamp(1.8rem, 4.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
                        Choose Your Preparation Destination
                    </h2>
                    <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8', width: '100%', margin: '0 auto 2.5rem' }}>
                        Explore detailed guides for 20 major Indian cities. Find the perfect location for your exam preparation journey with information on coaching hubs, exam centers, and career opportunities.
                    </p>
                    <div className="grid-responsive" style={{ gap: '1.5rem', justifyContent: 'center' }}>
                        <button onClick={() => window.scrollTo(0, 600)} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <MapPin size={20} /> Explore All Cities
                        </button>
                        <button onClick={onBack} className="btn btn-secondary">
                            <ArrowLeft size={20} /> Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationGuidesPage;
