import React from "react";
import { Route, Routes } from "react-router-dom";
// import NavbarComp from "../components/nav/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "../../src/router/PrivateRouter";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<About />} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;
