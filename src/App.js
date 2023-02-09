import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import Details from "./pages/Details";
import OrderPage from "./pages/OrderPage";
import ProductsPage from "./pages/ProductsPage";

const DUMMY_PRODUCTS = [
  {
    title: "Chanel Bag",
    price: 100,
    id: 1,
  },
  {
    title: "Victorias chain",
    price: 200, 
    id: 2,
  },
  
];

function App() {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/products"
          element={<ProductsPage products={DUMMY_PRODUCTS} />}
        />
        <Route path="/products/:id/details" element={<Details products={DUMMY_PRODUCTS}/>} />
        <Route path="/myCart" element={<CartPage />} />
        <Route path="/myOrders" element={<OrderPage />} />
      </Routes>
      <Outlet/>
      <Button onClick={goBackHandler}>Go Back</Button>
    </div>
  );
}

export default App;
