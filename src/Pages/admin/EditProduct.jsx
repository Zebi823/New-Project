import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products as productData } from '../../Utils/storage';
import Sidebar from '../../components/Sidebar';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    const product = productData.find(p => p.id === id);
    if (product) {
      setFormData({
        title: product.title || '',
        category: product.category || '',
        price: product.price?.replace(/[^\d.]/g, '') || '',
        quantity: product.quantity || ''
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    alert('Product updated!');
    navigate('/admin/products');
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 text-center">Edit Product</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Product Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="Enter product title"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="Enter category"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="Enter price"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="Enter quantity"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition duration-200"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-200"
                onClick={() => navigate('/admin/products')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
