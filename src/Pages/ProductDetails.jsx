import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { products } from "../Utils/Storage";
import {Star, Heart } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="p-10 text-center text-xl font-semibold text-red-600">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-gray-500 text-sm mb-2">
          Home / Category / <span className="text-black">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt="electronic image"
              className="rounded-xl shadow-md w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

            
            <div className="flex items-center space-x-1 text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              <span className="text-sm text-gray-600 ml-2">Rating <b className="text-green-600 text-sm font-medium">(In Stock)</b></span>
            </div>


            <div className="text-2xl font-semibold text-blue-600">
              ₹ {product.price}
            </div>

            <p className="text-gray-700">{product.description}</p><hr/>
            <div className="w-full space-y-4 mt-4">
              <div>
                   <span className="font-medium">Size:</span>
              </div>
                <div className="flex gap-2 mt-2 ">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                   <button
                      key={size}
               className="px-3 py-1 border rounded-sm text-sm font-semibold hover:bg-red-700 hover:text-white transition duration-200"
                     >
                 {size}
               </button>
      ))}
      <div>
    </div>
  </div>
            </div>
             <div className="flex items-center gap-4">
    <span className="font-medium">Quantity:</span>
    <div className="flex items-center border rounded-sm px-2 py-1">
      <button className="px-2 text-lg font-bold hover:text-red-600">-</button>
      <span className="px-4">1</span>
      <button className="px-2 text-lg font-bold hover:text-green-600">+</button>
    </div>
  </div>

      <div className="flex gap-4 mt-2 ">
            <button className="px-6 py-2 bg-red-700 text-white font-semibold font-sans rounded-sm hover:bg-red-800 transition">
              Add to Cart
            </button>
            <button className="px-2.5 py-2 border rounded-sm"><Heart strokeWidth="1.2"/></button>
        </div>    
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
