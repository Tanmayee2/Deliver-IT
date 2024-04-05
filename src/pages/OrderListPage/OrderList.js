import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/*function OrderItem({ imageSrc, text1, text2, text3 }) {
  return (
    <div className="order-item">
      <img src={imageSrc} alt="Order" className="order-image" />
      <div className="order-details">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <div className="order-buttons">
          <Button variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
}*/

function OrderList() {
  return (
    <Card border="info" style={{ width: "10rem" }}>
      <Card.Img src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Order 1</Card.Title>
        <Card.Text>
          This is how you can use card to show the order list neatly and in a
          good way
        </Card.Text>
        <Button variant="primary">Edit</Button>{" "}
        <Button variant="primary">Remove</Button>
      </Card.Body>
    </Card>
  );
  // Dummy data for demonstration

  /*const orders = [
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/150",
      text1: "Order #1",
      text2: "Details for order 1",
      text3: "Some additional info for order 1",
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/150",
      text1: "Order #2",
      text2: "Details for order 2",
      text3: "Some additional info for order 2",
    },
    // Add more orders as needed
  ];

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          imageSrc={order.imageSrc}
          text1={order.text1}
          text2={order.text2}
          text3={order.text3}
        />
      ))}
    </div>
  );
}*/
}
export default OrderList;
