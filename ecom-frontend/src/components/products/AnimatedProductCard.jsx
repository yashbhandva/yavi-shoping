import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useAnimation } from '../../hooks/useAnimation';
import { FaHeart, FaShoppingCart, FaEye, FaCheck } from 'react-icons/fa';

const AnimatedProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  
  const cardRef = useRef();
  const imageRef = useRef();
  const buttonsRef = useRef();
  const priceRef = useRef();
  
  // Initialize animations
  useAnimation(cardRef, 'fadeInUp');
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsInCart(true);
    onAddToCart?.(product);
    
    // Button click animation
    gsap.to(e.currentTarget, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
    
    // Reset cart state after animation
    setTimeout(() => setIsInCart(false), 2000);
  };
  
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsInWishlist(!isInWishlist);
    onAddToWishlist?.(product, !isInWishlist);
    
    // Heart beat animation
    gsap.to(e.currentTarget, {
      scale: 1.3,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    });
  };
  
  const handleQuickView = (e) => {
    e.stopPropagation();
    setShowQuickView(!showQuickView);
  };
  
  // Hover animations
  const handleHoverStart = () => {
    setIsHovered(true);
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out',
    });
    
    // Show action buttons
    gsap.to(buttonsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.1,
    });
    
    // Price animation
    if (product.discount > 0) {
      gsap.to(priceRef.current, {
        scale: 1.1,
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };
  
  const handleHoverEnd = () => {
    setIsHovered(false);
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
    
    // Hide action buttons
    gsap.to(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    });
    
    // Reset price animation
    if (product.discount > 0) {
      gsap.to(priceRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };
  
  // Discount badge animation
  const discountBadge = product.discount > 0 && (
    <motion.div 
      className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: [0, 5, -5, 5, 0] }}
      transition={{ 
        type: 'spring',
        stiffness: 500,
        damping: 10,
        delay: 0.3
      }}
    >
      {product.discount}% OFF
    </motion.div>
  );
  
  // Quick view modal
  const quickViewModal = showQuickView && (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowQuickView(false)}
      >
        <motion.div 
          className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.product_name} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{product.product_name}</h3>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-gray-900">
                  ₹{product.special_price?.toLocaleString()}
                </span>
                {product.discount > 0 && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ₹{product.price?.toLocaleString()}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="ml-2 text-sm text-green-600">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex gap-2 mt-6">
                <button 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={handleAddToCart}
                >
                  {isInCart ? (
                    <span className="flex items-center justify-center">
                      <FaCheck className="mr-2" /> Added to Cart
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <button 
                  className="p-2 text-gray-700 hover:text-red-500 transition-colors"
                  onClick={handleWishlistClick}
                >
                  <FaHeart className={isInWishlist ? 'text-red-500 fill-current' : 'text-gray-400'} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
  
  return (
    <>
      <motion.div 
        ref={cardRef}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative"
        whileHover={{ y: -5 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={handleQuickView}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden h-64">
          <img
            ref={imageRef}
            src={product.image}
            alt={product.product_name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          {/* Discount Badge */}
          {discountBadge}
          
          {/* Action Buttons */}
          <div 
            ref={buttonsRef}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-center gap-3 translate-y-10 opacity-0"
          >
            <button 
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-blue-100 transition-colors"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              {isInCart ? <FaCheck className="text-green-500" /> : <FaShoppingCart />}
            </button>
            <button 
              className={`bg-white rounded-full w-10 h-10 flex items-center justify-center ${isInWishlist ? 'text-red-500' : 'text-gray-800 hover:text-red-500'} transition-colors`}
              onClick={handleWishlistClick}
              aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <FaHeart className={isInWishlist ? 'fill-current' : ''} />
            </button>
            <button 
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-blue-100 transition-colors"
              onClick={handleQuickView}
              aria-label="Quick view"
            >
              <FaEye />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{product.product_name}</h3>
          <div className="flex items-center justify-between">
            <div ref={priceRef} className="flex items-baseline">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.special_price?.toLocaleString()}
              </span>
              {product.discount > 0 && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{product.price?.toLocaleString()}
                </span>
              )}
            </div>
            {product.quantity > 0 ? (
              <span className="text-xs text-green-600">In Stock</span>
            ) : (
              <span className="text-xs text-red-600">Out of Stock</span>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Quick View Modal */}
      {quickViewModal}
    </>
  );
};

export default AnimatedProductCard;
