import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Products from "./components/Products";
import Singleproduct from "./components/Singleproduct";
import Cart from "./components/Cart";
import Hme from "./components/Hme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Appprovider, Appcontext } from "./context/Productcontext";
import { FiltercontextProvider } from "./context/Filtercontext";
import { Cartprovider } from "./context/Cartcontext";
function App() {
  return (
    <Appprovider>
      <FiltercontextProvider>
        <Cartprovider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hme />}>
                {" "}
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/product" element={<Products />}></Route>
              <Route path="/contact" element={<Contact />}></Route>

              <Route
                path="/singleproduct/:id"
                element={<Singleproduct />}
              ></Route>

              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </Cartprovider>
      </FiltercontextProvider>
    </Appprovider>
  );
}

export default App;
