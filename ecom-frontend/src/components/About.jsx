import { Link } from "react-router-dom";
import { useGSAPFadeIn, useGSAPSlideIn, useGSAPScale } from './animations/GSAPAnimations';
import ThreeBackground from './animations/ThreeBackground';
import '../assets/style/about.scss';

const About = () => {
    const headerRef = useGSAPFadeIn();
    const storyRef = useGSAPSlideIn('left');
    const missionRef = useGSAPSlideIn('right');
    const valuesRef = useGSAPScale();
    const ceoRef = useGSAPSlideIn('up');
    
    return (
        <div className="theme-bg-primary min-h-screen relative">
            <ThreeBackground />
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <h1 className="text-6xl md:text-7xl font-extrabold theme-text-primary mb-6 animate-fade-in">📖 About Us</h1>
                    <p className="text-2xl theme-text-secondary max-w-5xl mx-auto leading-relaxed">
                        Welcome to <span className="theme-accent font-bold text-3xl">E-Shop</span>! We are more than just an e-commerce store – we are a community built on trust, innovation, and a passion for quality.
                    </p>
                </div>

                {/* Our Story */}
                <div ref={storyRef} className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-l-8 theme-accent-border transform hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl font-bold theme-text-primary mb-8 flex items-center gap-4">
                                🌍 <span>Our Story</span>
                            </h2>
                            <p className="theme-text-secondary text-xl leading-relaxed mb-6 font-medium">
                                Every big idea starts small. E-Shop was founded with a dream: to make online shopping easier, smarter, and more reliable for everyone. In today's fast-paced world, customers want two things – quality and convenience.
                            </p>
                            <p className="theme-text-secondary text-xl leading-relaxed font-medium">
                                From a humble beginning, we have grown into a trusted e-commerce destination, offering products that meet the needs of modern lifestyles. Our store is designed for every customer – whether you are looking for everyday essentials, premium products, or the latest trends.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="w-full h-80 rounded-2xl overflow-hidden theme-shadow-hover transform hover:rotate-2 transition-all duration-300">
                                <img 
                                    src="/img/ss.jpg"
                                    alt="Our Story" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full theme-bg-secondary rounded-2xl flex items-center justify-center" style={{display: 'none'}}>
                                    <span className="theme-text-muted text-xl font-semibold">Story Image</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission */}
                <div ref={missionRef} className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-t-8 theme-accent-border">
                    <h2 className="text-4xl font-bold theme-text-primary mb-8 text-center flex items-center justify-center gap-4">
                        🎯 <span>Our Mission</span>
                    </h2>
                    <p className="theme-text-secondary text-xl text-center mb-10 font-medium max-w-3xl mx-auto">
                        Our mission is simple but powerful:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <p className="theme-text-primary font-bold text-lg">• To provide high-quality products at fair prices</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <p className="theme-text-primary font-bold text-lg">• To ensure a smooth and secure shopping journey</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <p className="theme-text-primary font-bold text-lg">• To build trust-based relationships with customers</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <p className="theme-text-primary font-bold text-lg">• To keep innovation at the heart of everything we do</p>
                        </div>
                    </div>
                </div>

                {/* Vision & Values */}
                <div ref={valuesRef} className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-r-8 theme-accent-border">
                    <h2 className="text-4xl font-bold theme-text-primary mb-8 text-center flex items-center justify-center gap-4">
                        👁️ <span>Our Vision & Core Values</span>
                    </h2>
                    <p className="theme-text-secondary text-xl text-center mb-12 font-medium max-w-4xl mx-auto">
                        We aim to become a leading name in global e-commerce by combining innovation with human values.
                    </p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <div className="text-center transform hover:scale-110 transition-all duration-300">
                            <div className="w-20 h-20 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-3xl">🤝</span>
                            </div>
                            <h3 className="font-bold theme-text-primary mb-3 text-lg">Trust</h3>
                            <p className="theme-text-muted font-medium">Every transaction is a promise</p>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-all duration-300">
                            <div className="w-20 h-20 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-3xl">⭐</span>
                            </div>
                            <h3 className="font-bold theme-text-primary mb-3 text-lg">Quality</h3>
                            <p className="theme-text-muted font-medium">International standards</p>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-all duration-300">
                            <div className="w-20 h-20 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-3xl">💡</span>
                            </div>
                            <h3 className="font-bold theme-text-primary mb-3 text-lg">Innovation</h3>
                            <p className="theme-text-muted font-medium">Smart solutions</p>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-all duration-300">
                            <div className="w-20 h-20 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-3xl">👤</span>
                            </div>
                            <h3 className="font-bold theme-text-primary mb-3 text-lg">Customer First</h3>
                            <p className="theme-text-muted font-medium">Your needs matter</p>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-all duration-300">
                            <div className="w-20 h-20 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-3xl">🌱</span>
                            </div>
                            <h3 className="font-bold theme-text-primary mb-3 text-lg">Sustainability</h3>
                            <p className="theme-text-muted font-medium">Greener future</p>
                        </div>
                    </div>
                </div>

                {/* CEO Section */}
                <div ref={ceoRef} className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-b-8 theme-accent-border">
                    <h2 className="text-4xl font-bold theme-text-primary mb-12 text-center flex items-center justify-center gap-4">
                        👤 <span>Meet Our CEO</span>
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/3 text-center">
                            <div className="w-60 h-60 rounded-full mx-auto mb-6 overflow-hidden theme-shadow-hover transform hover:scale-105 transition-all duration-300">
                                <img 
                                    src="/images/yash.jpg"
                                    alt="Yash Bhandva - CEO" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full theme-bg-secondary rounded-full flex items-center justify-center" style={{display: 'none'}}>
                                    <span className="theme-text-muted text-xl font-semibold">CEO</span>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold theme-text-primary mb-2">Yash Bhandva</h3>
                            <p className="theme-accent font-bold text-xl">Founder & CEO</p>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="theme-text-secondary text-xl leading-relaxed mb-6 font-medium">
                                Meet our CEO, Yash Bhandva, the visionary behind our e-commerce platform. With a passion for innovation and customer satisfaction, he set out to build a store that brings quality products closer to everyone.
                            </p>
                            <p className="theme-text-secondary text-xl leading-relaxed font-medium">
                                Under his leadership, our mission is to make online shopping simple, secure, and enjoyable. He believes that customers deserve not just products, but also trust, transparency, and value in every purchase. With Yash Bhandva guiding the journey, we are committed to redefining e-commerce for our customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What Makes Us Different */}
                <div className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-l-8 theme-accent-border">
                    <h2 className="text-4xl font-bold theme-text-primary mb-12 text-center flex items-center justify-center gap-4">
                        💡 <span>What Makes Us Different?</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Wide Product Range</h3>
                            <p className="theme-text-muted font-medium text-lg">From essentials to exclusive items, everything in one place</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Unbeatable Value</h3>
                            <p className="theme-text-muted font-medium text-lg">Fair pricing without compromising quality</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Fast & Secure Delivery</h3>
                            <p className="theme-text-muted font-medium text-lg">Your products, delivered safely and quickly</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Customer Care</h3>
                            <p className="theme-text-muted font-medium text-lg">A dedicated support team that listens and solves</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Technology-Driven</h3>
                            <p className="theme-text-muted font-medium text-lg">Smart search, personalized recommendations, secure payments</p>
                        </div>
                        <div className="theme-bg-secondary p-8 rounded-xl theme-shadow hover:theme-shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="font-bold theme-text-primary mb-4 text-xl">Community Focused</h3>
                            <p className="theme-text-muted font-medium text-lg">Building long-term relationships, not just transactions</p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="theme-bg-card theme-shadow-hover rounded-2xl p-10 mb-16 border-t-8 theme-accent-border">
                    <h2 className="text-4xl font-bold theme-text-primary mb-12 text-center flex items-center justify-center gap-4">
                        🏆 <span>Achievements & Milestones</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="transform hover:scale-110 transition-all duration-300">
                            <div className="w-24 h-24 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-4xl">👥</span>
                            </div>
                            <h3 className="text-4xl font-bold theme-text-primary mb-2">10K+</h3>
                            <p className="theme-text-muted font-bold text-lg">Happy Customers</p>
                        </div>
                        <div className="transform hover:scale-110 transition-all duration-300">
                            <div className="w-24 h-24 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-4xl">🤝</span>
                            </div>
                            <h3 className="text-4xl font-bold theme-text-primary mb-2">50+</h3>
                            <p className="theme-text-muted font-bold text-lg">Brand Partners</p>
                        </div>
                        <div className="transform hover:scale-110 transition-all duration-300">
                            <div className="w-24 h-24 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-4xl">🔒</span>
                            </div>
                            <h3 className="text-4xl font-bold theme-text-primary mb-2">100%</h3>
                            <p className="theme-text-muted font-bold text-lg">Secure Service</p>
                        </div>
                        <div className="transform hover:scale-110 transition-all duration-300">
                            <div className="w-24 h-24 theme-accent-bg rounded-full flex items-center justify-center mx-auto mb-4 theme-shadow-hover">
                                <span className="text-white text-4xl">⭐</span>
                            </div>
                            <h3 className="text-4xl font-bold theme-text-primary mb-2">95%+</h3>
                            <p className="theme-text-muted font-bold text-lg">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>

                {/* Join Our Journey */}
                <div className="theme-bg-card theme-shadow-hover rounded-2xl p-12 text-center border-8 theme-accent-border transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-4xl font-bold theme-text-primary mb-8 flex items-center justify-center gap-4">
                        🤝 <span>Join Our Journey</span>
                    </h2>
                    <p className="theme-text-secondary text-xl mb-10 max-w-4xl mx-auto font-medium leading-relaxed">
                        At E-Shop, we don't just deliver products – we deliver trust, quality, and happiness. Our story is still being written, and we invite you to be a part of it.
                    </p>
                    <Link to="/products">
                        <button className="theme-accent-bg text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:opacity-85 transition-all duration-300 transform hover:scale-105 theme-shadow-hover">
                            Explore Our Store
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;