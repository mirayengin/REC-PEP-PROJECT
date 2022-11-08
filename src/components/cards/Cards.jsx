import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CardButton, CardTitle } from "./Cards.style";

const Cards = ({ item }) => {
  const navigate = useNavigate();
  console.log(item.recipe);
  const { image, label } = item.recipe;

  return (
    <Col >
      <Card style={{ width: "18rem",height:"27rem", marginBottom:"1rem", padding:"0.5rem", backgroundColor:"lightgrey", borderRadius:"1rem"}}>
        <CardTitle >{label}</CardTitle>
        <Card.Body>
          <Card.Img style={{height:"15rem"}} variant="top" src={image} />
          <CardButton onClick={(e) => navigate("/detail", {state:item})}>View More</CardButton>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
