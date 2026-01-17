import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGSAPFadeIn, useGSAPSlideIn, useGSAPScale } from './animations/GSAPAnimations';
import ThreeBackground from './animations/ThreeBackground';
import '../assets/style/about.scss';

const About = () => {
    // Animation Refs
    const headerRef = useGSAPFadeIn();
    const storyRef = useGSAPSlideIn('left');
    const missionRef = useGSAPSlideIn('right');
    const valuesRef = useGSAPScale();
    const ceoRef = useGSAPSlideIn('up');
    const skillsRef = useGSAPSlideIn('down');

    // State
    const [activeSkill, setActiveSkill] = useState(0);
    const [stats, setStats] = useState({
        customers: 0,
        projects: 0,
        hours: 0,
        satisfaction: 0
    });

    // Static Data for Single Founder
    const founderData = {
        name: "Yash Bhandva",
        title: "Founder & CEO",
        bio: "Visionary entrepreneur building yavi from ground up. Passionate about creating exceptional e-commerce experiences.",
        fullBio: [
            "As the sole founder of yavi, I wear multiple hats - from product development to customer support, marketing to operations.",
            "With a background in technology and business, I started yavi with a simple mission: to create a platform that genuinely cares about its customers.",
            "Every feature you see, every product listed, and every customer interaction has been personally handled by me. This ensures quality control and authentic connection.",
            "I believe in hands-on entrepreneurship where the founder is deeply involved in every aspect of the business."
        ],
        skills: [
            { name: "Full-Stack Development", level: 95 },
            { name: "UI/UX Design", level: 90 },
            { name: "Digital Marketing", level: 85 },
            { name: "Business Strategy", level: 92 },
            { name: "Customer Support", level: 98 }
        ],
        socialLinks: {
            linkedin: "https://linkedin.com/in/yashbhandva",
            github: "https://github.com/yashbhandva",
            twitter: "https://twitter.com/yashbhandva",
            portfolio: "https://yashbhandva.com"
        },
        dailyRoutine: [
            "Morning: Customer support & order processing",
            "Afternoon: Product development & platform improvements",
            "Evening: Marketing & business strategy",
            "Night: Learning new technologies"
        ]
    };

    const companyData = {
        name: "yavi",
        founded: "2023",
        tagline: "Built with Passion, Run with Precision",
        mission: "To deliver exceptional e-commerce experiences through personal attention and technical excellence.",
        vision: "To prove that a single dedicated individual can build a world-class e-commerce platform that rivals corporate giants."
    };

    const timeline = [
        {
            date: "Jan 2023",
            title: "Journey Begins",
            description: "Started coding the platform from scratch",
            icon: "💻"
        },
        {
            date: "Apr 2023",
            title: "First Customer",
            description: "Made the first sale after 3 months of development",
            icon: "🎯"
        },
        {
            date: "Sep 2023",
            title: "100th Customer",
            description: "Reached 100 happy customers milestone",
            icon: "🥳"
        },
        {
            date: "Dec 2023",
            title: "Platform 2.0",
            description: "Complete redesign and feature overhaul",
            icon: "🚀"
        },
        {
            date: "Present",
            title: "Growing Strong",
            description: "Serving customers with personal touch",
            icon: "📈"
        }
    ];

    const values = [
        {
            title: "Personal Touch",
            description: "Every customer interacts directly with the founder",
            icon: "👋",
            color: "#3B82F6"
        },
        {
            title: "Quality Over Quantity",
            description: "Focus on perfecting every product listing",
            icon: "🎯",
            color: "#10B981"
        },
        {
            title: "Continuous Learning",
            description: "Always improving skills and platform",
            icon: "📚",
            color: "#8B5CF6"
        },
        {
            title: "Transparency",
            description: "No hidden policies, clear communication",
            icon: "🔍",
            color: "#F59E0B"
        }
    ];

    const achievements = [
        {
            icon: "👨‍💻",
            title: "Solo Developer",
            stat: "100%",
            description: "Built entire platform alone"
        },
        {
            icon: "⭐",
            title: "Customer Rating",
            stat: "4.9/5",
            description: "Based on 500+ reviews"
        },
        {
            icon: "⚡",
            title: "Response Time",
            stat: "< 2 hrs",
            description: "Average support response"
        },
        {
            icon: "🔄",
            title: "Platform Updates",
            stat: "Weekly",
            description: "Regular improvements"
        }
    ];

    // Animate stats
    useEffect(() => {
        const timer = setTimeout(() => {
            setStats({
                customers: 850,
                projects: 1200,
                hours: 2800,
                satisfaction: 98
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page founder-mode">
            {/* Background Effect */}
            <ThreeBackground />

            {/* Hero Section - Founder Focus */}
            <section className="founder-hero" ref={headerRef}>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="founder-badge">
                                <span className="badge-icon">👨‍💼</span>
                                <span className="badge-text">One-Man Army</span>
                            </div>
                            <h1 className="hero-title">
                                Building <span className="highlight">{companyData.name}</span><br />
                                With Passion & Code
                            </h1>
                            <p className="hero-subtitle">
                                {companyData.tagline}
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <div className="stat-number">{stats.customers.toLocaleString()}+</div>
                                    <div className="stat-label">Happy Customers</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">{stats.projects.toLocaleString()}+</div>
                                    <div className="stat-label">Projects Completed</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">{stats.hours.toLocaleString()}+</div>
                                    <div className="stat-label">Coding Hours</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="founder-avatar">
                                <img
                                    src="/images/yash.jpg"
                                    alt="Yash Bhandva - Founder & CEO"
                                    className="avatar-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="avatar-fallback">
                                    <span className="fallback-text">YB</span>
                                </div>
                                <div className="avatar-badge">
                                    <span className="badge">FOUNDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Story */}
            <section className="founder-story" ref={storyRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">📖</span>
                            The Solo Journey
                        </h2>
                        <p className="section-subtitle">
                            How one person can build an entire e-commerce platform
                        </p>
                    </div>

                    <div className="story-content">
                        <div className="story-text">
                            <h3 className="story-title">Meet Yash Bhandva</h3>
                            {founderData.fullBio.map((paragraph, index) => (
                                <p key={index} className="story-paragraph">
                                    {paragraph}
                                </p>
                            ))}
                            <div className="founder-quote">
                                <div className="quote-icon">💬</div>
                                <p className="quote-text">
                                    "When you buy from yavi, you're not just buying from a company -
                                    you're supporting an individual's dream and dedication."
                                </p>
                                <div className="quote-author">— Yash Bhandva</div>
                            </div>
                        </div>

                        <div className="story-timeline">
                            <h4 className="timeline-title">Milestone Journey</h4>
                            <div className="timeline">
                                {timeline.map((item, index) => (
                                    <div className="timeline-item" key={index}>
                                        <div className="timeline-marker">
                                            <span className="marker-icon">{item.icon}</span>
                                        </div>
                                        <div className="timeline-content">
                                            <div className="timeline-date">{item.date}</div>
                                            <h5 className="timeline-event">{item.title}</h5>
                                            <p className="timeline-desc">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Expertise */}
            <section className="skills-section" ref={skillsRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🛠️</span>
                            Multi-Disciplinary Skills
                        </h2>
                        <p className="section-subtitle">
                            One person, multiple roles - all handled with expertise
                        </p>
                    </div>

                    <div className="skills-grid">
                        {founderData.skills.map((skill, index) => (
                            <div
                                className={`skill-card ${activeSkill === index ? 'active' : ''}`}
                                key={index}
                                onMouseEnter={() => setActiveSkill(index)}
                            >
                                <div className="skill-header">
                                    <h4 className="skill-name">{skill.name}</h4>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="skill-role">
                                    {index === 0 && "Built the entire platform"}
                                    {index === 1 && "Designed all interfaces"}
                                    {index === 2 && "Manages all marketing"}
                                    {index === 3 && "Handles business planning"}
                                    {index === 4 && "Provides personal support"}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="daily-routine">
                        <h4 className="routine-title">Typical Day as a Solo Founder</h4>
                        <div className="routine-grid">
                            {founderData.dailyRoutine.map((task, index) => (
                                <div className="routine-item" key={index}>
                                    <div className="routine-time">
                                        {task.split(':')[0]}
                                    </div>
                                    <div className="routine-task">
                                        {task.split(':')[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section" ref={valuesRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🌟</span>
                            Solo Founder Philosophy
                        </h2>
                        <p className="section-subtitle">
                            Principles that guide every decision at yavi
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div
                                className="value-card"
                                key={index}
                                style={{ borderTopColor: value.color }}
                            >
                                <div className="value-icon-wrapper" style={{ backgroundColor: value.color }}>
                                    <span className="value-icon">{value.icon}</span>
                                </div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-desc">{value.description}</p>
                                <div className="value-example" style={{
                                    backgroundColor: `${value.color}20`,
                                    color: value.color
                                }}>
                                    {index === 0 && "You chat directly with me"}
                                    {index === 1 && "Each product is personally verified"}
                                    {index === 2 && "Platform improves every week"}
                                    {index === 3 && "No corporate bureaucracy"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="achievements-section" ref={ceoRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🏆</span>
                            Solo Achievements
                        </h2>
                        <p className="section-subtitle">
                            What one dedicated person can accomplish
                        </p>
                    </div>

                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <div className="achievement-card" key={index}>
                                <div className="achievement-icon">
                                    <span>{achievement.icon}</span>
                                </div>
                                <div className="achievement-content">
                                    <div className="achievement-stat">{achievement.stat}</div>
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-desc">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Contact */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-card">
                        <div className="contact-header">
                            <h3 className="contact-title">
                                <span className="contact-icon">💬</span>
                                Talk Directly to the Founder
                            </h3>
                            <p className="contact-subtitle">
                                No support agents, no automated responses - just direct communication
                            </p>
                        </div>

                        <div className="contact-options">
                            <a
                                href="mailto:yash@eshop.com"
                                className="contact-option email"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="option-icon">📧</span>
                                <div className="option-content">
                                    <h4>Email Support</h4>
                                    <p>yash@eshop.com</p>
                                    <small>Response within 2 hours</small>
                                </div>
                            </a>

                            <div className="contact-option social">
                                <span className="option-icon">🌐</span>
                                <div className="option-content">
                                    <h4>Connect Socially</h4>
                                    <div className="social-links">
                                        <a href={founderData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        <a href={founderData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        <a href={founderData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-option commitment">
                                <span className="option-icon">🤝</span>
                                <div className="option-content">
                                    <h4>Personal Commitment</h4>
                                    <p>Every customer matter gets my personal attention</p>
                                    <small>100% satisfaction guarantee</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="founder-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">
                            Experience Personal E-Commerce
                        </h2>
                        <p className="cta-text">
                            When you shop with yavi, you're not just another order number.
                            You're supporting an individual's passion project and getting
                            personal attention that big corporations can't provide.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/products" className="btn btn-primary">
                                <span className="btn-icon">🛒</span>
                                Shop Products
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                <span className="btn-icon">💬</span>
                                Chat with Founder
                            </Link>
                        </div>
                        <div className="founder-signature">
                            <div className="signature-line"></div>
                            <div className="signature-name">Yash Bhandva</div>
                            <div className="signature-title">Founder, yavi</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;