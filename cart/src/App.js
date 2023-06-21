import { Box } from "@chakra-ui/react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { Navbar } from "./components/navbar/_Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
