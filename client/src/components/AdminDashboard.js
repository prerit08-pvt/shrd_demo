import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    maxPrice: '',
    salePrice: '',
    stock: '',
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission for adding or updating products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('maxPrice', formData.maxPrice);
    form.append('salePrice', formData.salePrice);
    form.append('stock', formData.stock);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      if (editMode) {
        // Update product
        await axios.put(`http://localhost:5000/api/admin/product/${editProductId}`, form);
      } else {
        // Add new product
        await axios.post('http://localhost:5000/api/admin/add-product', form);
      }
      setFormData({
        name: '',
        description: '',
        maxPrice: '',
        salePrice: '',
        stock: '',
        image: null,
      });
      setEditMode(false);
      fetchProducts();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      maxPrice: product.maxPrice,
      salePrice: product.salePrice,
      stock: product.stock,
      image: null,
    });
    setEditMode(true);
    setEditProductId(product._id);
  };

  // Handle delete
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/product/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleInputChange}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sale Price</label>
          <input
            type="number"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleInputChange}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="border rounded w-full px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {editMode ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Max Price</th>
            <th className="py-2 px-4 border-b">Sale Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">${product.maxPrice}</td>
              <td className="py-2 px-4 border-b">${product.salePrice}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
