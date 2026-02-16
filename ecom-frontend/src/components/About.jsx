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
        <div className="about-page founder-mode min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Background Effect */}
            <ThreeBackground />

            {/* Hero Section - Enhanced with modern gradient and glass morphism */}
            <section className="founder-hero relative overflow-hidden py-20 md:py-32" ref={headerRef}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 animate-gradient"></div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hero-text space-y-8">
                            <div className="founder-badge inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <span className="badge-icon text-2xl">👨‍💼</span>
                                <span className="badge-text font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">One-Man Army</span>
                            </div>
                            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Building <span className="highlight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{companyData.name}</span><br />
                                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">With Passion & Code</span>
                            </h1>
                            <p className="hero-subtitle text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                                {companyData.tagline}
                            </p>
                            <div className="hero-stats flex gap-8">
                                <div className="stat-item group">
                                    <div className="stat-number text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                        {stats.customers.toLocaleString()}+
                                    </div>
                                    <div className="stat-label text-gray-500 dark:text-gray-400">Happy Customers</div>
                                </div>
                                <div className="stat-item group">
                                    <div className="stat-number text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                        {stats.projects.toLocaleString()}+
                                    </div>
                                    <div className="stat-label text-gray-500 dark:text-gray-400">Projects Completed</div>
                                </div>
                                <div className="stat-item group">
                                    <div className="stat-number text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                        {stats.hours.toLocaleString()}+
                                    </div>
                                    <div className="stat-label text-gray-500 dark:text-gray-400">Coding Hours</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image relative">
                            <div className="founder-avatar relative w-64 h-64 mx-auto group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                                    <img
                                        src="/images/yash.jpg"
                                        alt="Yash Bhandva - Founder & CEO"
                                        className="avatar-img w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="avatar-fallback hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                                        <span className="fallback-text text-4xl font-bold text-white">YB</span>
                                    </div>
                                </div>
                                <div className="avatar-badge absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                                    <span className="badge text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FOUNDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Story - Enhanced with glass cards */}
            <section className="founder-story py-20" ref={storyRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header text-center mb-16">
                        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                            <span className="title-icon inline-block mr-3 text-4xl">📖</span>
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">The Solo Journey</span>
                        </h2>
                        <p className="section-subtitle text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            How one person can build an entire e-commerce platform
                        </p>
                    </div>

                    <div className="story-content grid lg:grid-cols-2 gap-12">
                        <div className="story-text space-y-6">
                            <h3 className="story-title text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Meet Yash Bhandva
                            </h3>
                            {founderData.fullBio.map((paragraph, index) => (
                                <p key={index} className="story-paragraph text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                            <div className="founder-quote relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                                <div className="quote-icon absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                                    💬
                                </div>
                                <p className="quote-text text-lg italic text-gray-700 dark:text-gray-200 mt-4">
                                    "When you buy from yavi, you're not just buying from a company -
                                    you're supporting an individual's dream and dedication."
                                </p>
                                <div className="quote-author mt-4 font-semibold text-right text-gray-600 dark:text-gray-400">
                                    — Yash Bhandva
                                </div>
                            </div>
                        </div>

                        <div className="story-timeline bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                            <h4 className="timeline-title text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Milestone Journey
                            </h4>
                            <div className="timeline space-y-6">
                                {timeline.map((item, index) => (
                                    <div className="timeline-item flex gap-4 group" key={index}>
                                        <div className="timeline-marker flex-shrink-0">
                                            <div className="marker-icon w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform shadow-lg">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <div className="timeline-date text-sm font-semibold text-blue-600 dark:text-blue-400">
                                                {item.date}
                                            </div>
                                            <h5 className="timeline-event text-lg font-bold text-gray-900 dark:text-white">
                                                {item.title}
                                            </h5>
                                            <p className="timeline-desc text-gray-600 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Expertise - Enhanced with modern skill bars */}
            <section className="skills-section py-20 bg-gray-50 dark:bg-gray-900/50" ref={skillsRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header text-center mb-16">
                        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                            <span className="title-icon inline-block mr-3 text-4xl">🛠️</span>
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Multi-Disciplinary Skills</span>
                        </h2>
                        <p className="section-subtitle text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            One person, multiple roles - all handled with expertise
                        </p>
                    </div>

                    <div className="skills-grid grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {founderData.skills.map((skill, index) => (
                            <div
                                className={`skill-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl ${
                                    activeSkill === index ? 'ring-2 ring-blue-500 scale-105' : ''
                                }`}
                                key={index}
                                onMouseEnter={() => setActiveSkill(index)}
                            >
                                <div className="skill-header flex justify-between items-center mb-3">
                                    <h4 className="skill-name text-lg font-semibold text-gray-900 dark:text-white">
                                        {skill.name}
                                    </h4>
                                    <span className="skill-percentage text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="skill-bar h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="skill-progress h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="skill-role mt-3 text-sm text-gray-500 dark:text-gray-400">
                                    {index === 0 && "Built the entire platform"}
                                    {index === 1 && "Designed all interfaces"}
                                    {index === 2 && "Manages all marketing"}
                                    {index === 3 && "Handles business planning"}
                                    {index === 4 && "Provides personal support"}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="daily-routine mt-16 max-w-4xl mx-auto">
                        <h4 className="routine-title text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Typical Day as a Solo Founder
                        </h4>
                        <div className="routine-grid grid sm:grid-cols-2 gap-4">
                            {founderData.dailyRoutine.map((task, index) => (
                                <div className="routine-item bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all" key={index}>
                                    <div className="routine-time text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                        {task.split(':')[0]}
                                    </div>
                                    <div className="routine-task text-gray-700 dark:text-gray-300">
                                        {task.split(':')[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Enhanced with gradient cards */}
            <section className="values-section py-20" ref={valuesRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header text-center mb-16">
                        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                            <span className="title-icon inline-block mr-3 text-4xl">🌟</span>
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Solo Founder Philosophy</span>
                        </h2>
                        <p className="section-subtitle text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Principles that guide every decision at yavi
                        </p>
                    </div>

                    <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                className="value-card group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                key={index}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="value-icon-wrapper w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                     style={{ backgroundColor: value.color }}>
                                    <span className="value-icon text-3xl">{value.icon}</span>
                                </div>
                                <h4 className="value-title text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h4>
                                <p className="value-desc text-gray-600 dark:text-gray-400 mb-4">
                                    {value.description}
                                </p>
                                <div className="value-example text-sm font-semibold px-4 py-2 rounded-full inline-block"
                                     style={{
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

            {/* Achievements - Enhanced with modern cards */}
            <section className="achievements-section py-20 bg-gray-50 dark:bg-gray-900/50" ref={ceoRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header text-center mb-16">
                        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
                            <span className="title-icon inline-block mr-3 text-4xl">🏆</span>
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Solo Achievements</span>
                        </h2>
                        <p className="section-subtitle text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            What one dedicated person can accomplish
                        </p>
                    </div>

                    <div className="achievements-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div className="achievement-card bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" key={index}>
                                <div className="achievement-icon text-5xl mb-6 animate-bounce">{achievement.icon}</div>
                                <div className="achievement-content">
                                    <div className="achievement-stat text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {achievement.stat}
                                    </div>
                                    <h4 className="achievement-title text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {achievement.title}
                                    </h4>
                                    <p className="achievement-desc text-sm text-gray-500 dark:text-gray-400">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Contact - Enhanced with glass morphism */}
            <section className="contact-section py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="contact-card bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                            <div className="contact-header text-center mb-12">
                                <h3 className="contact-title text-4xl font-bold mb-4">
                                    <span className="contact-icon inline-block mr-3 text-4xl">💬</span>
                                    Talk Directly to the Founder
                                </h3>
                                <p className="contact-subtitle text-xl text-white/90 max-w-2xl mx-auto">
                                    No support agents, no automated responses - just direct communication
                                </p>
                            </div>

                            <div className="contact-options grid md:grid-cols-3 gap-6">
                                <a
                                    href="mailto:yash@eshop.com"
                                    className="contact-option email bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="option-icon text-4xl block mb-4">📧</span>
                                    <div className="option-content">
                                        <h4 className="text-xl font-bold mb-2">Email Support</h4>
                                        <p className="text-white/90">yash@eshop.com</p>
                                        <small className="text-white/70">Response within 2 hours</small>
                                    </div>
                                </a>

                                <div className="contact-option social bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                                    <span className="option-icon text-4xl block mb-4">🌐</span>
                                    <div className="option-content">
                                        <h4 className="text-xl font-bold mb-4">Connect Socially</h4>
                                        <div className="social-links flex flex-wrap gap-4">
                                            <a href={founderData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">LinkedIn</a>
                                            <a href={founderData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">GitHub</a>
                                            <a href={founderData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">Twitter</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-option commitment bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                                    <span className="option-icon text-4xl block mb-4">🤝</span>
                                    <div className="option-content">
                                        <h4 className="text-xl font-bold mb-2">Personal Commitment</h4>
                                        <p className="text-white/90">Every customer matter gets my personal attention</p>
                                        <small className="text-white/70">100% satisfaction guarantee</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced with modern design */}
            <section className="founder-cta py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="cta-content text-center max-w-4xl mx-auto">
                        <h2 className="cta-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            Experience Personal E-Commerce
                        </h2>
                        <p className="cta-text text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                            When you shop with yavi, you're not just another order number.
                            You're supporting an individual's passion project and getting
                            personal attention that big corporations can't provide.
                        </p>
                        <div className="cta-buttons flex flex-wrap gap-4 justify-center mb-16">
                            <Link to="/products" className="btn btn-primary group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-600/30 transition-all hover:scale-105">
                                <span className="btn-icon mr-2 group-hover:animate-bounce inline-block">🛒</span>
                                Shop Products
                            </Link>
                            <Link to="/contact" className="btn btn-secondary group relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-gray-500/30 transition-all hover:scale-105 border-2 border-gray-200 dark:border-gray-700">
                                <span className="btn-icon mr-2 group-hover:animate-bounce inline-block">💬</span>
                                Chat with Founder
                            </Link>
                        </div>
                        <div className="founder-signature">
                            <div className="signature-line w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
                            <div className="signature-name text-2xl font-bold text-gray-900 dark:text-white">Yash Bhandva</div>
                            <div className="signature-title text-gray-500 dark:text-gray-400">Founder, yavi</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;