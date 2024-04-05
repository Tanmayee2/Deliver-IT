import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function OrderList() {
  return (
    <CardGroup>
      <Card border="info">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Order 1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Edit</Button>{" "}
          <Button variant="primary">Remove</Button>{" "}
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card border="info">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Order 2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Edit</Button>{" "}
          <Button variant="primary">Remove</Button>{" "}
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>
      <Card border="info">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Order 3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Edit</Button>{" "}
          <Button variant="primary">Remove</Button>{" "}
          <small className="text-muted">Last updated 8 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default OrderList;
