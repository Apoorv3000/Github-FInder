import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-1 flex-col bg-[#141414] ">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
