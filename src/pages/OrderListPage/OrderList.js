import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function OrderList() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: "Order 1",
      lastUpdated: "3 mins ago",
      text: "Your order was successfully delivered! Please rate our service",
    },
    {
      id: 2,
      title: "Order 2",
      lastUpdated: "10 mins ago",
      text: "Your order was successfully delivered! Please rate our service",
    },
    {
      id: 3,
      title: "Order 3",
      lastUpdated: "8 mins ago",
      text: "Your order was successfully delivered! Please rate our service",
    },
  ]);

  const removeOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      <CardGroup>
        {orders.map((order) => (
          <Card key={order.id} border="info">
            <Card.Img variant="top" src={require(`../../assets/order.png`)} />
            <Card.Body>
              <Card.Title>{order.title}</Card.Title>
              <Card.Text>{order.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger" onClick={() => removeOrder(order.id)}>
                Remove
              </Button>{" "}
              <small className="text-muted">
                Last updated {order.lastUpdated}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default OrderList;
