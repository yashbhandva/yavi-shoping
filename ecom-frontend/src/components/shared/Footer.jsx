import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    <footer className="theme-bg-secondary theme-text-primary mt-16">
      <div className="lg:px-14 sm:px-8 px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 theme-text-primary">E-Shop</h3>
            <p className="theme-text-secondary mb-4 text-sm leading-relaxed">
              Your trusted online marketplace for quality products at unbeatable prices. 
              Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="theme-text-secondary hover:text-blue-500 transition-colors duration-300 hover-scale">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="theme-text-secondary hover:text-pink-500 transition-colors duration-300 hover-scale">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="theme-text-secondary hover:text-blue-400 transition-colors duration-300 hover-scale">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="theme-text-secondary hover:text-blue-600 transition-colors duration-300 hover-scale">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left">
            <h3 className="text-lg font-semibold mb-4 theme-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="theme-text-secondary hover:theme-text-primary transition-colors duration-300 text-sm hover-scale inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="theme-text-secondary hover:theme-text-primary transition-colors duration-300 text-sm hover-scale inline-block">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="theme-text-secondary hover:theme-text-primary transition-colors duration-300 text-sm hover-scale inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="theme-text-secondary hover:theme-text-primary transition-colors duration-300 text-sm hover-scale inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="theme-text-secondary hover:theme-text-primary transition-colors duration-300 text-sm hover-scale inline-block">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h3 className="text-lg font-semibold mb-4 theme-text-primary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="theme-text-secondary" />
                <span className="theme-text-secondary text-sm">moda ,kutch ,gujrat(370155)</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="theme-text-secondary" />
                <span className="theme-text-secondary text-sm">+91 9512570683</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="theme-text-secondary" />
                <span className="theme-text-secondary text-sm">yashbhandva01@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 theme-text-primary">Newsletter</h3>
            <p className="theme-text-secondary text-sm mb-4">
              Subscribe to get updates on new products and exclusive offers!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg theme-bg-primary theme-text-primary theme-border border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 btn-animated micro-bounce"
              >
                <FaPaperPlane />
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-500 text-sm mt-2 animate-bounce-in">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t theme-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="theme-text-secondary text-sm animate-fade-in">
              © 2024 E-Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 animate-slide-in-right">
              <Link to="#" className="theme-text-secondary hover:theme-text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="theme-text-secondary hover:theme-text-primary text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="theme-text-secondary hover:theme-text-primary text-sm transition-colors duration-300">
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