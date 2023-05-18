import { Route, Routes } from "react-router-dom";
import Home from "./Componentt/Home";
import Product from "./Componentt/Product";
import Header from "./Navbar/Navbar";
import Products from "./Componentt/Products";
function App() {

  return (
    <div>
      <div>
        <Header/>
        <Routes>
          <Route exact path="Home" element={<Home/>}/>
          <Route exact path="Product" element={<Product/>}/>
          <Route exact path="Products/:id" element={<Products/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;





