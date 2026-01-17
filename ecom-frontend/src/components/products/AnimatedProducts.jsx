import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/actions';
import useProductFilter from '../../hooks/useProductFilter';
import { FaExclamationTriangle } from 'react-icons/fa';
import Loader from '../shared/Loader';
import Paginations from '../shared/Paginations';
import Filter from './Filter';
import AnimeProductCard from './AnimeProductCard';
import '../../styles/animeProductCard.css';
import '../../styles/cinematic-animations.css';

const AnimatedProducts = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { products, categories, pagination } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  // Use the product filter hook
  useProductFilter();

  // Fetch categories on component mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);



  // If loading, show loader
  if (isLoading) {
    return <Loader />;
  }

  // If there's an error, show error message
  if (errorMessage) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-red-500">
        <FaExclamationTriangle className="text-4xl mb-4" />
        <p className="text-xl">{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      {/* Filter Component */}
      <Filter categories={categories || []} />
      
      {/* Products Grid */}
      <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8 staggered-grid anime-optimized">
        {products && products.map((product, index) => (
          <AnimeProductCard 
            key={product.id || index} 
            product={product} 
            index={index}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center pt-10">
        {pagination && (
          <Paginations 
            numberOfPage={pagination.totalPages}
            totalProducts={pagination.totalElements}
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedProducts;
