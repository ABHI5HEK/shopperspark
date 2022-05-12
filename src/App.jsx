import Cart from "./pages/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom';

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route  path="/product/:id" element={<ProductPage />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?<Navigate  to="/"/>:<Login />}/>
        <Route path="/register" element={user?<Navigate  to="/"/>:<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;