import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Folders from "./components/Folders";
import Home from "./components/Home";
function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Folders />} path="/folders" />
      <Route element={<Cart />} path="/cart" />
    </Routes>
  );
}

export default App;
