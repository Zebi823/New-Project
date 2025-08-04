
import './Style.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Login from "./Pages/Login"
import HomePage from './Pages/HomePage';
import AdminDashboard  from './Pages/admin/Dashboard';
import  ProductCards  from "./components/ProductCards"
import EditProduct from './Pages/admin/EditProduct';
import AddProduct from './Pages/admin/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import  ProductsList  from './Pages/admin/ProductsList';
function App() {


  return (
    <>
      <BrowserRouter>
         <Routes>
         
           <Route path="/product/:id" element={<ProductDetails />} />
             <Route  path='/'  element={<HomePage/>} />
              <Route  path='/login'  element={<Login/>} />

             {/* private routes */}
             <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ProductsList />} />
          <Route path="/admin/productcards" element={<ProductCards />} />
           <Route path="/admin/products/add" element={<AddProduct/>} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />
           
            
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
