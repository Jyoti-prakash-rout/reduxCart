import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
};

export default App;
