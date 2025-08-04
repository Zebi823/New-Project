import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from "../Utils/storage";

const ProductCards = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-3 pb-4 pl-14 pr-14 bg-gray-100">
        {products.map((product, idx) => (
          <div
            onClick={() => navigate(`/product/${product.id}`)}
            key={idx}
            className="flex-shrink-0 w-[278px] rounded-xl bg-white shadow-md transition-transform p-4 cursor-pointer"
          >
            <div className="flex justify-between mb-2">
              <span><Heart size={18} /></span>
              <span>👁️</span>
            </div>

            <div className="h-[140px] overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-2">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-red-400">{product.price}</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
