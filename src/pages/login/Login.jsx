import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Nav, { LoginButton, LoginDiv, LoginForm, LoginH1 } from "./Login.style";
// import Loginfoto from "../../assets/asci.jpg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import background from "../../assets/asci.jp"
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(" ");
  const [passwordData, setPasswordData] = useState("");
  // const [localData, setLocalData] = useState("");
  // const [errorUsername, setErrorUsername] = useState(false)
  // const [errorPassword, setErrorPassword] = useState(false)
  const [error, setError] = useState(false);

  // console.log(errorUsername);
  // console.log(errorPassword);

  console.log("username :", username);
  console.log(typeof passwordData);

  console.log(localStorage.getItem(`${username}`));

  const handleLogin1 = (e) => {
    e.preventDefault();
    const dataLast = JSON.parse(localStorage.getItem(`${username}`));
    console.log(dataLast);

    if (
      dataLast?.username !== username ||
      dataLast?.password !== passwordData
    ) {
      setError(true);
      setUsername(" ");
      setPasswordData("");
    } else {
      navigate("/home");
    }

    // const statususer = dataLast?.username !== "";
    // statususer ? (if(dataLast?.username !== username || dataLast?.password !== passwordData) {
    //       setError(true);

    //   })
    // : ""

    // const dataLast = dataLast1.filter((item) => item.username !== "");
    // console.log(dataLast?.password)
    // if (dataLast?.password !== passwordData) {
    //   setErrorPassword(!errorPassword);

    // } else if (dataLast?.username !== username) {
    //   setErrorUsername(!errorUsername)

    // } else if (dataLast?.username !== username && dataLast?.password !== passwordData) {
    //   setErrorPassword(!errorPassword);
    //   setErrorUsername(!errorUsername)
    // } else {
    //   navigate("/home")
    //   setErrorUsername(false);
    //   setErrorPassword(false);
    //   ;
    // }
  };

  // const mystyle = {
  //   backgroundImage:"url(../../assets/asci.jpg)"
  // }

  return (
    <>
      <Nav  expand="lg" variant="light" bg="bg-warning">
        <Container fluid>
          <NavLink style={{textDecoration:"none", fontSize:"1.5rem", border:"solid 2px", padding:"0.7rem", borderRadius:"1rem", background:"lightyellow", color:"black", fontWeight:"bold", marginRight:"2rem"}} to="/register">Create Account</NavLink>
        </Container>
      </Nav>

      <LoginDiv>
        <LoginForm>
          <Form.Group className="mb-3">
            <LoginH1>Username</LoginH1>
            <Form.Control
              className=" bg-warning fw-bold"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Enter Username"
            />
          </Form.Group>
          {/* <p>{ errorUsername && "The wrong username" }</p> */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <LoginH1>Password</LoginH1>
            <Form.Control
              className=" bg-warning fw-bold "
              size="lg"
              value={passwordData}
              onChange={(e) => setPasswordData(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>
          <LoginH1>{error && "The wrong password or username"} </LoginH1>
          <LoginButton onClick={handleLogin1} variant="primary" type="submit">
            SING IN
          </LoginButton>
        </LoginForm>
      </LoginDiv>
    </>
  );
};

export default Login;
