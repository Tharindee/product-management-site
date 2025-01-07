import { fetchProducts } from '../../services/api';
import ProductFilter from '../../components/ProductFilter/ProductFilter';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import React from 'react';
import ProductDetailsModal from '../../components/ProductDetailsModal/ProductDetailsModal';
import Cart from '../../components/Cart/Cart';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroBlock from '../../components/HeroBlock/HeroBlock';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { AnimatePresence, motion } from "framer-motion";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const itemsPerPage = 10;

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(); // Fetch products
      setProducts(data);

      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }

      const uniqueCategories = [...new Set(data.map((product) => product.category))];
      setCategories(uniqueCategories);

      setFilteredProducts(data); // Initialize with all products
    };

    loadProducts();
  }, []);

  // Filter Products
  const filterProducts = (term, category) => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Handlers
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);

    const regex = new RegExp(`(${term})`, 'gi');
    const filtered = products.map((product) => {
      const highlightedTitle = product.title.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );
      return { ...product, highlightedTitle };
    });

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartVisible(true);
    setIsModalOpen(false);
    handleCloseModal();
  };

  const handleToggleCart = () => {
    setIsCartVisible((prev) => !prev);
  };

  const handleClearCart = () => {
    setCart([]);
    setIsCartVisible(false);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  const handleFilterClick = () => {
    filterProducts(searchTerm, selectedCategory);
  };
  

  // Paginate Products
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Page smooth behavior
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 50; 
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  

  return (
    <>
    <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
      onCartClick={handleToggleCart}
      onNavClick={handleNavClick}/>

    <HeroBlock />
    
    <div className="product-list-page">
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <ProductFilter
        categories={categories} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} />

      {loading ? (
        <LoadingSpinner />
          ) : (
          <div className="product-grid">
            {displayedProducts.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product}
              onViewDetails={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }} />
            ))}
          </div>
        )
      }

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}/>

      <AnimatePresence>
        {isModalOpen && (
          <ProductDetailsModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartVisible && (
          <Cart
            cart={cart}
            onClearCart={handleClearCart}
            onCheckout={handleCheckout}
            onCloseCart={handleToggleCart}
            isOpen={isCartVisible}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
    </>
  );
};

export default ProductListPage;
