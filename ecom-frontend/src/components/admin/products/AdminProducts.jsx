import React, { useState, useEffect, useCallback } from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../shared/Loader';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductTableColumn } from '../../helper/tableColumn';
import { useDashboardProductFilter } from '../../../hooks/useProductFilter';
import Modal from '../../shared/Modal';
import AddProductForm from './AddProductForm';
import DeleteModal from '../../shared/DeleteModal';
import { deleteProduct, fetchCategories } from '../../../store/actions';
import toast from 'react-hot-toast';
import ImageUploadForm from './ImageUploadForm';
import ProductViewModal from '../../shared/ProductViewModal';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// Debounce function to limit API calls during search
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const AdminProducts = () => {
  // const products = [{ "productId": 52, "productName": "iPad Pro", "image": "http://localhost:8080/images/7a7b38c4-2342-4d10-89e9-2c5b3c4fdb44.png", "description": "High-performance Tablet with a 4K display and powerful camera", "quantity": 30, "price": 1800.0, "discount": 43.0, "specialPrice": 1026.0 }, { "productId": 2, "productName": "iPhone 16 Pro Max", "image": "http://localhost:8080/images/22185fd1-024a-4708-9a10-832b8a50bfde.png", "description": "High-performance phone with a 4K display and powerful camera", "quantity": 19, "price": 1400.0, "discount": 23.0, "specialPrice": 1078.0 }];
  // const pagination = { pageNumber: 0, pageSize: 50, totalElements: 11, totalPages: 1, lastPage: true };
  
  const dispatch = useDispatch();
  
  // Select products, categories, and pagination from the products slice
  const { products, categories, pagination } = useSelector((state) => ({
    products: state.products.products || [],
    categories: state.products.categories || [],
    pagination: state.products.pagination || {}
  }));
  
  // Select error state
  const { isLoading, errorMessage } = useSelector((state) => ({
    isLoading: state.errors.isLoading,
    errorMessage: state.errors.errorMessage
  }));
  
  // Debug logs
  useEffect(() => {
    console.log('Products from Redux:', products);
    console.log('Categories from Redux:', categories);
    console.log('Pagination from Redux:', pagination);
  }, [products, categories, pagination]);
  
  // Debug logs
  useEffect(() => {
    console.log('Products state:', { products, pagination });
    console.log('Categories:', categories);
  }, [products, pagination, categories]);
  
  const [currentPage, setCurrentPage] = useState(
    pagination?.pageNumber ? pagination.pageNumber + 1 : 1
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  // Get navigation and location hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pathname = location.pathname;
  
  // Fetch categories on component mount if not already loaded
  useEffect(() => {
    const loadCategories = async () => {
      try {
        if ((!categories || categories.length === 0) && !isLoading) {
          await dispatch(getAllCategoriesDashboard());
          
          // After fetching categories, update the selected category from URL if present
          const categoryId = searchParams.get('categoryId');
          if (categoryId) {
            setSelectedCategory(categoryId);
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    loadCategories();
  }, [dispatch, categories, isLoading, searchParams]);
  
  // State for modals and UI
  const [selectedProduct, setSelectedProduct] = useState('');
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const [openImageUploadModal, setOpenImageUploadModal] = useState(false);
  const [loader, setLoader] = useState(false);

  // User and auth state
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

  // Use the product filter hook
  useDashboardProductFilter();

  // Initial data loading
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Update URL when search term or category changes
  const updateUrl = useCallback(() => {
    const params = new URLSearchParams();
    
    if (searchTerm) {
      params.set('keyword', searchTerm);
    }
    
    if (selectedCategory) {
      params.set('categoryId', selectedCategory);
    }
    
    // Keep current page if it exists, otherwise default to 1
    const currentPageParam = searchParams.get('page') || '1';
    params.set('page', currentPageParam);
    
    navigate(`${pathname}?${params.toString()}`);
  }, [searchTerm, selectedCategory, pathname, navigate, searchParams]);

  // Handle search with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      updateUrl();
    }, 500);
    
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, selectedCategory, updateUrl]);

  // Initialize from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const urlSearchTerm = params.get('keyword') || '';
    const urlCategory = params.get('categoryId') || '';
    
    setSearchTerm(urlSearchTerm);
    setSelectedCategory(urlCategory);
    
    const page = params.get('page') ? Number(params.get('page')) : 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleSearch = () => {
    // Trigger search by updating URL
    const params = new URLSearchParams();
    if (searchTerm) params.set('keyword', searchTerm);
    if (selectedCategory) params.set('categoryId', selectedCategory);
    params.set('page', '1'); // Reset to first page when searching
    navigate(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    // Reset to first page when clearing filters
    navigate(pathname);
    // Optional: Refetch all products without filters
    dispatch(dashboardProductsAction('', isAdmin));
  };

  const tableRecords = products?.map((item) => {
  return {
    id: item.productId,
    productName: item.productName,
    description: item.description,
    discount: item.discount,
    image: item.image,
    price: item.price,
    quantity: item.quantity,
    specialPrice: item.specialPrice,
  }
});

const handleEdit = (product) => {
  setSelectedProduct(product);
  setOpenUpdateModal(true);
};

const handleDelete = (product) => {
  setSelectedProduct(product);
  setOpenDeleteModal(true);
};

const handleImageUpload = (product) => {
  setSelectedProduct(product);
  setOpenImageUploadModal(true);
};

const handleProductView = (product) => {
  setSelectedProduct(product);
  setOpenProductViewModal(true);
};


const handlePaginationChange = (paginationModel) => {
  // No need to add 1 here since we're using 1-based indexing
  const page = paginationModel.page + 1;
  setCurrentPage(page);
  
  const params = new URLSearchParams();
  
  // Always set page (1-based)
  params.set('page', page.toString());
  
  // Preserve search and filter parameters
  if (searchTerm) params.set('keyword', searchTerm);
  if (selectedCategory) params.set('categoryId', selectedCategory);
  
  navigate(`${pathname}?${params.toString()}`);
};


const onDeleteHandler = () => {
  dispatch(deleteProduct(setLoader, selectedProduct?.id, toast, setOpenDeleteModal, isAdmin));
};

  const emptyProduct = !products || products?.length ===0;
  return (
    <div>
      {/* Search and Filter Section */}
      <div className='pt-6 pb-6 space-y-4'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex flex-col md:flex-row gap-4 flex-1'>
            {/* Search Input */}
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search by product name...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <FaSearch className='absolute left-3 top-3 text-gray-400' />
            </div>
            
            {/* Category Filter */}
            <div className='relative'>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  const categoryId = e.target.value;
                  setSelectedCategory(categoryId);
                  
                  // Update URL with new category filter
                  const params = new URLSearchParams();
                  if (searchTerm) params.set('keyword', searchTerm);
                  if (categoryId) params.set('categoryId', categoryId);
                  params.set('page', '1'); // Reset to first page when changing category
                  
                  // Update URL
                  navigate(`${pathname}?${params.toString()}`);
                }}
                className='appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px] bg-white'
              >
                <option value=''>All Categories</option>
                {Array.isArray(categories) && categories.length > 0 ? (
                  categories.map((category) => (
                    <option 
                      key={category.id || category.categoryId} 
                      value={category.id || category.categoryId}
                      className='py-1'
                    >
                      {category.name || category.categoryName || `Category ${category.id || category.categoryId}`}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading categories...</option>
                )}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
            
            {/* Search Button */}
            <button
              onClick={handleSearch}
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors'
              disabled={isSearching}
            >
              {isSearching ? (
                <>
                  <svg className='animate-spin -ml-1 mr-2 h-4 w-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Searching...
                </>
              ) : (
                <>
                  <FaSearch />
                  <span>Search</span>
                </>
              )}
            </button>
            
            {/* Clear Filters */}
            {(searchTerm || selectedCategory) && (
              <button
                onClick={handleClearFilters}
                className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors'
              >
                <FaTimes />
                Clear
              </button>
            )}
          </div>
          
          {/* Add Product Button */}
          <button
            onClick={() => setOpenAddModal(true)}
            className='bg-custom-blue hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300 duration-300'
          >
            <MdAddShoppingCart className='text-xl' />
            Add Product
          </button>
        </div>
        
        {/* Active Filters Display */}
        {(searchTerm || selectedCategory) && (
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <span>Active filters:</span>
            {searchTerm && (
              <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded'>
                Search: "{searchTerm}"
              </span>
            )}
            {selectedCategory && (
              <span className='bg-green-100 text-green-800 px-2 py-1 rounded'>
                Category: {categories?.find(c => c.categoryId == selectedCategory)?.categoryName}
              </span>
            )}
          </div>
        )}
      </div>


    {!emptyProduct && (
      <h1 className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>
        All Products</h1>
    )}
    {isLoading ? (
      <Loader />
    ) : (
      <>
      {emptyProduct ? (
        <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
          <FaBoxOpen size={50} className='mb-3'/>
          <h2 className='text-2xl font-semibold text-center'>
            {searchTerm || selectedCategory 
              ? 'No products match your search criteria' 
              : 'No products created yet'}
          </h2>
          {(searchTerm || selectedCategory) && (
            <button
              onClick={handleClearFilters}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className='max-w-full'>
          <DataGrid
            className='w-full'
            rows={tableRecords}
            columns={adminProductTableColumn(
              handleEdit,
              handleDelete,
              handleImageUpload,
              handleProductView)}
            paginationMode='server'
            rowCount={pagination?.totalElements || 0}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: pagination?.pageSize || 10,
                  page: currentPage - 1, // MUI DataGrid uses 0-based indexing
                },
              },
            }}
            onPaginationModelChange={handlePaginationChange}
            disableRowSelectionOnClick
            disableColumnResize
            pageSizeOptions={[pagination?.pageSize || 10]}
            pagination
            page={currentPage - 1} // MUI DataGrid uses 0-based indexing
            rowCount={pagination?.totalElements || 0}
            paginationMode="server"
            paginationOptions={{
              showFirstButton: true,
              showLastButton: true,
              hideNextButton: currentPage === pagination?.totalPages,
            }}
            />
        </div>
      )}
      </>
    )}

    <Modal
      open={openUpdateModal || openAddModal}
      setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
      title={openUpdateModal ? "Update Product" : "Add Product"}>
        <AddProductForm 
          setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
          product={selectedProduct}
          update={openUpdateModal}
          />
    </Modal>


    <Modal
      open={openImageUploadModal}
      setOpen={setOpenImageUploadModal}
      title="Add Product Image">
        <ImageUploadForm 
          setOpen={setOpenImageUploadModal}
          product={selectedProduct}
          />
    </Modal>


    <DeleteModal
      open={openDeleteModal}
      setOpen={setOpenDeleteModal}
      loader={loader}
      title="Delete Product"
      onDeleteHandler={onDeleteHandler} />

      <ProductViewModal 
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default AdminProducts