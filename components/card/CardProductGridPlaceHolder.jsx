import React from "react";
import { Card, Placeholder } from "react-bootstrap";

const CardProductGridPlaceHolder = (props) => {


  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src="/images/NO_IMG.png" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder  xs={7}  /> <Placeholder xs={4} />{" "}
        </Placeholder>
    
     
      </Card.Body>
    </Card>
  );
};

export default CardProductGridPlaceHolder;
