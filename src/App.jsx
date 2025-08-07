import './Style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login";
import HomePage from './Pages/HomePage';
import AdminDashboard from './Pages/admin/Dashboard';
import ProductCards from "./components/ProductCards";
import EditProduct from './Pages/admin/EditProduct';
import AddProduct from './Pages/admin/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import ProductsList from './Pages/admin/ProductsList';
import PrivateRoute from './components/PrivateRoute'; // ✅ import it

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <ProductsList />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/productcards"
          element={
            <PrivateRoute>
              <ProductCards />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/add"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
