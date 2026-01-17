import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/style/footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

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
              <a href="#" className="footer__social-link footer__social-link--facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="footer__social-link footer__social-link--instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="footer__social-link footer__social-link--twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="footer__social-link footer__social-link--linkedin">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section footer__section--left">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li className="footer__link-item">
                <Link to="/products" className="footer__link">
                  Shop
                </Link>
              </li>
              <li className="footer__link-item">
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li className="footer__link-item">
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
              <li className="footer__link-item">
                <Link to="/cart" className="footer__link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section footer__section--right">
            <h3 className="footer__title">Contact Info</h3>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span className="footer__contact-text">moda, kutch, gujrat(370155)</span>
              </div>
              <div className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <span className="footer__contact-text">+91 9512570683</span>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <span className="footer__contact-text">yashbhandva01@gmail.com</span>
              </div>
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
              <button
                type="submit"
                className="footer__submit-button"
              >
                <FaPaperPlane className="footer__submit-icon" />
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
              </button>
            </form>
            {isSubscribed && (
              <p className="footer__success-message">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom-bar">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2024 E-Shop. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <Link to="#" className="footer__bottom-link">
                Privacy Policy
              </Link>
              <Link to="#" className="footer__bottom-link">
                Terms of Service
              </Link>
              <Link to="#" className="footer__bottom-link">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;