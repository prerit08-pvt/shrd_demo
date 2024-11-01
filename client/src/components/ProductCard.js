import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  let discount = (product.maxPrice-product.salePrice)/product.maxPrice*100;

  return (
      <div className="p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <Link to={`/product/${product._id}`}>
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-2"
          onError={(e) => e.target.src = 'http://localhost:5000/uploads/products/thumbnail.png'} // Fallback image
        />
      </Link>

      {/* Product Name */}
      <Link to={`/product/${product._id}`}>
        <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-1">
          {product.name}
        </h2>
      </Link>

      {/* Product Price */}
      <Link to={`/product/${product._id}`}>
        <p className="text-base  text-gray-900 hover:text-blue-600 transition-colors">
          <strike>${product.maxPrice}</strike>
          <span className="ml-2">{discount}%</span> <br />
          <span className="ml-2">${product.salePrice}</span>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
