import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Asci from "../../assets/ascı.jpg"
import { NavbarImg } from "../nav/Navbar.style";

const NavbarComp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Navbar   bg="info" variant="dark">
          <Container fluid className="justify-content-between mx-5">
            <Navbar.Brand><NavbarImg onClick={(e) => navigate("/home")} src={Asci} alt="img ascı" /></Navbar.Brand>
            <Nav >
              <NavLink className="fs-3 text-decoration-none text-black" to="/home" element={<Home/>}>Home</NavLink>
              <NavLink className="mx-5 fs-3 text-decoration-none text-black"  to="/about" element={<About/>}>About</NavLink>
              <NavLink className="fs-3 text-decoration-none text-black" to="/" elemet={<Login/>}>Logout</NavLink>
            </Nav>
          </Container>
        </Navbar>

      </>
    </div>
  );
};

export default NavbarComp;
