import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Authentication";
import Shop from "./pages/Shop";
import Navigation from "./components/navigation/navigation-component";

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
