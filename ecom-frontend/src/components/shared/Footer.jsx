import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/style/footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/cart', label: 'Cart' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', className: 'facebook', label: 'Facebook' },
    { icon: FaInstagram, href: '#', className: 'instagram', label: 'Instagram' },
    { icon: FaTwitter, href: '#', className: 'twitter', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', className: 'linkedin', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'moda, kutch, gujrat(370155)' },
    { icon: FaPhone, text: '+91 9512570683' },
    { icon: FaEnvelope, text: 'yashbhandva01@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section">
            <h3 className="footer__title footer__title--main">E-Shop</h3>
            <p className="footer__description">
              Your trusted online marketplace for quality products at unbeatable prices.
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="footer__social-links">
              {socialLinks.map(({ icon: Icon, href, className, label }) => (
                <a
                  key={className}
                  href={href}
                  className={`footer__social-link footer__social-link--${className}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section footer__section--left">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map(({ path, label }) => (
                <li key={path} className="footer__link-item">
                  <Link to={path} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section footer__section--right">
            <h3 className="footer__title">Contact Info</h3>
            <div className="footer__contact-info">
              {contactInfo.map(({ icon: Icon, text }, index) => (
                <div key={index} className="footer__contact-item">
                  <Icon className="footer__contact-icon" />
                  <span className="footer__contact-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer__section">
            <h3 className="footer__title">Newsletter</h3>
            <p className="footer__newsletter-text">
              Subscribe to get updates on new products and exclusive offers!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
              <div className="footer__input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="footer__email-input"
                  required
                />
              </div>
              <button type="submit" className="footer__submit-button">
                <FaPaperPlane className="footer__submit-icon" />
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
              </button>
            </form>
            {isSubscribed && (
              <p className="footer__success-message">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom-bar">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <Link to="#" className="footer__bottom-link">Privacy Policy</Link>
              <Link to="#" className="footer__bottom-link">Terms of Service</Link>
              <Link to="#" className="footer__bottom-link">Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="footer__scroll-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;