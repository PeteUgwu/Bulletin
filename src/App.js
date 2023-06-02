/* eslint-disable quotes */
import React from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  // const dispatch = useDispatch();
  // dispatch(fetchNews());
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
