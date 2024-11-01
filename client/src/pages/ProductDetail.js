import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/cartContext'; // Import CartContext

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleImageError = (event) => {
    // Fallback to thumbnail image on error
    event.target.src = 'http://localhost:5000/uploads/products/thumbnail.png';
  };
  let discount = (product.maxPrice-product.salePrice)/product.maxPrice*100;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
      {product.image ? (
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full lg:w-1/3 object-cover mb-4 lg:mb-0"
          onError={handleImageError} 

        />
      ) : (
        <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
          No Image Available
        </div>
      )}
        <div className="lg:ml-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <strike><p className="text-base text-red-600">${product.maxPrice}</p></strike>
          <p className="text-base text-gray-900">{discount}%</p>
          <p className="text-lg font-semibold mb-4">${product.salePrice}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
