
import './Style.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from "./Pages/Login"
import HomePage from './Pages/HomePage';
import AdminDashboard  from './Pages/admin/Dashboard';
import  ProductList  from './Pages/admin/ProductList';
import EditProduct from './Pages/admin/EditProduct';
import AddProduct from './Pages/admin/AddProduct';
import ProductDetails from './Pages/ProductDetails';
function App() {


  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route  path='/login'  element={<Login/>} />
             <Route  path='/'  element={<HomePage/>} />

             {/* private routes */}
             <Route path="/private" element={<PrivateRoute />}/>
             <Route path="admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductList />} />
           <Route path="/admin/products/add" element={<AddProduct/>} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
