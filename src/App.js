import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/navigation-component";
import Signin from "./pages/Signin";

const Shop = () => <div>Shop</div>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
