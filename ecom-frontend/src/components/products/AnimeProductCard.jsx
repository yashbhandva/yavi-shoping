import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye, FaStar } from 'react-icons/fa';

const AnimeProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const actionRefs = useRef({});
  
  // Random anime-style color themes
  const themes = [
    { bg: 'from-blue-500/10 to-indigo-500/10', accent: 'blue-400' },
    { bg: 'from-pink-500/10 to-purple-500/10', accent: 'pink-400' },
    { bg: 'from-green-500/10 to-teal-500/10', accent: 'green-400' },
    { bg: 'from-yellow-500/10 to-orange-500/10', accent: 'yellow-400' },
  ];
  
  const theme = themes[index % themes.length];

  // Initialize cinematic animations
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Add heroic entrance animation
    card.classList.add('heroic-entrance');
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      card.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    };
    
    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.3s ease-out';
      // Create floating particles on hover
      createFloatingParticles(card);
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [index]);
  
  // Create floating particles effect
  const createFloatingParticles = (container) => {
    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${i * 0.2}s`;
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 3000);
    }
  };
  
  // Handle action button click with particle explosion
  const handleActionClick = (action, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Cinematic button press animation
    button.classList.add('character-excited');
    
    // Create sparkle explosion
    createSparkleExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);
    
    // Create spark trail to cart (if add to cart)
    if (action === 'add-to-cart') {
      createSparkTrail(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    
    setTimeout(() => {
      button.classList.remove('character-excited');
    }, 1000);
    
    console.log(`${action} clicked for ${product.name}`);
  };
  
  // Create sparkle explosion effect
  const createSparkleExplosion = (x, y) => {
    for (let i = 0; i < 8; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-explosion';
      sparkle.style.position = 'fixed';
      sparkle.style.left = `${x + (Math.random() - 0.5) * 40}px`;
      sparkle.style.top = `${y + (Math.random() - 0.5) * 40}px`;
      sparkle.style.zIndex = '9999';
      sparkle.style.pointerEvents = 'none';
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        if (document.body.contains(sparkle)) {
          document.body.removeChild(sparkle);
        }
      }, 800);
    }
  };
  
  // Create spark trail effect
  const createSparkTrail = (startX, startY) => {
    for (let i = 0; i < 3; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark-trail';
      spark.style.position = 'fixed';
      spark.style.left = `${startX}px`;
      spark.style.top = `${startY}px`;
      spark.style.zIndex = '9999';
      spark.style.pointerEvents = 'none';
      document.body.appendChild(spark);
      
      setTimeout(() => {
        if (document.body.contains(spark)) {
          document.body.removeChild(spark);
        }
      }, 1500);
    }
  };
  
  // Render rating stars
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative inline-block">
            <FaStar className="text-gray-300" />
            <FaStar className="absolute left-0 top-0 text-yellow-400 w-1/2 overflow-hidden" />
          </div>
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    
    return (
      <div className="flex space-x-1">
        {stars}
        <span className="ml-2 text-sm text-gray-500">({product.ratingCount || 0})</span>
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      className={`relative group bg-gradient-to-br ${theme.bg} rounded-2xl overflow-hidden shadow-lg anime-card-hover anime-optimized`}
    >
      {/* Badge */}
      {product.discount && (
        <div 
          className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg animate-bounce-in"
          style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
        >
          {product.discount}% OFF
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-white/5 rounded-t-2xl">
        <img
          ref={imageRef}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:scale-110 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            {['wishlist', 'quickview', 'cart'].map((action) => (
              <button
                key={action}
                ref={el => actionRefs.current[action] = el}
                onClick={(e) => handleActionClick(action, e)}
                className={`p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-${theme.accent} hover:text-white cinematic-button`}
              >
                {action === 'wishlist' && <FaHeart className="text-pink-500 group-hover:text-white" />}
                {action === 'quickview' && <FaEye className="text-blue-500 group-hover:text-white" />}
                {action === 'cart' && <FaShoppingCart className="text-green-500 group-hover:text-white" />}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-${theme.accent} opacity-10 blur-xl`}></div>
          <div className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-${theme.accent} opacity-10 blur-xl`}></div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <h3 
          ref={titleRef}
          className="text-lg font-bold text-gray-800 dark:text-white mb-2 truncate"
        >
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          {renderRating(product.rating || 0)}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium shadow-md cinematic-button magical-text"
            onClick={(e) => handleActionClick('add-to-cart', e)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Hover effect elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-${theme.accent} to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
    </div>
  );
};

export default AnimeProductCard;
