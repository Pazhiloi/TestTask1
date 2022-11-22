import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useActions } from './hooks/useActions';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

// api - https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
