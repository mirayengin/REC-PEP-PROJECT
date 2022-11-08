import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterDiv, RegisterH1, RegisterP } from "./Register.style";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(true);
  const [empty, setEmpty] = useState(false);

  console.log(user);
  console.log(password);


  const handleLocal = (e) => {
    e.preventDefault();
    setEmpty(false);
    const local = JSON.parse(localStorage.getItem(user));
    console.log(local);

    if (local?.username === user) {
      setEmpty(true);
      setPassword("");
      setUser("");
    } else if (user === "" || password === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
      localStorage.setItem(
        `${user}`,
        JSON.stringify({ username: user, password: password })
      );
      setChange(false);
      setPassword("");
      setUser("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
    setChange(true);
  };

  return (
    <RegisterDiv>
      <Form style={{ width: "25rem" }}>
        <Form.Group className="mb-3 text-start" controlId="formBasicText">
          <RegisterH1 style={{ fontWeight: "bold" }}>Username</RegisterH1>
          <Form.Control
            size="lg"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 text-start fs-6"
          controlId="formBasicPassword"
        >
          <RegisterH1 style={{ fontWeight: "bold" }}>Password</RegisterH1>
          <Form.Control
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        <RegisterP>{empty ? "Enter Username or Another Username" : ""} </RegisterP>

        {change ? (
          <Button
            onClick={handleLocal}
            style={{ textAlign: "center", backgroundColor: "yellowgreen", padding:"0.5rem", fontSize:"bold"}}
            variant="primary"
            type="btn"
          >
            Create Account
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            style={{ textAlign: "center", backgroundColor: "blue", padding:"0.5rem", fontSize:"bold" }}
            variant="primary"
            type="btn"
          >
            Go Login Page
          </Button>
        )}
      </Form>
    </RegisterDiv>
  );
};

export default Register;
