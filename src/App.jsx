import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/";
import Navigation from "./components/navigation";
import Authentication from "./pages/authentication";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />

      </Route>
    </Routes>
  )
}

export default App;
