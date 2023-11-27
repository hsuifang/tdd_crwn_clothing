import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/navigation-component";

const Shop = () => <div>Shop</div>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
