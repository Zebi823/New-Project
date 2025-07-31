import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Product ID: {id}</h1>
      
    </div>
  );
};

export default ProductDetails;
