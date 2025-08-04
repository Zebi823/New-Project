import React, { useState } from "react";
import { products as initialProducts } from "../../Utils/storage";
import { useNavigate } from "react-router-dom";
import { Trash, Edit } from "lucide-react";

const ProductsList = () => {
  const navigate = useNavigate();
  const [productss, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (confirm) {
      const updatedList = productss.filter((item) => item.id !== id);
      setProducts(updatedList);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Products Table</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount (₹)</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {productss.length > 0 ? (
              productss.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-4 text-sm text-gray-800">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-4">
                      <button
                        className="text-blue-600 hover:text-blue-800 transition"
                        onClick={() => navigate(`/admin/products/edit/${item.id}`)}
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 transition"
                        onClick={() => handleDelete(item.id)}
                        title="Delete"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
