import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Navigation from "./components/navigation/navigation-component";
import Auth from "./pages/Authentication/Index";

const Shop = () => <div>Shop</div>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
