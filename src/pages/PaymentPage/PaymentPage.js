import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "./PaymentPage.scss";
import { useNavigate } from "react-router";

export default function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false); // New state to track field validity
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setMessage("Please fill in all required payment details.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setMessage("Payment Successful!");
      setTimeout(() => {
        setMessage("Redirecting...");
        setTimeout(() => navigate("/LandingPage"), 2000);
      }, 2000);
    }, 2000);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  // Handle changes in the PaymentElement
  const handlePaymentElementChange = (event) => {
    setIsValid(event.complete);
  };

  return (
    <div className="d-flex flex-column mt-5 align-items-center justify-content-center h-100">
      <Form
        id="payment-form"
        onSubmit={handleSubmit}
        className="w-50 border-black border-1 border p-4 rounded-2"
      >
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions}
          onChange={handlePaymentElementChange} // Monitor changes
        />
        <div className="d-flex flex-column mt-3 align-items-center">
          <Button
            disabled={isLoading || !stripe || !elements || !isValid} // Check the validity of the form
            id="submit"
            className="w-50"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <Spinner animation="border" role="status" />
            ) : (
              "Pay now"
            )}
          </Button>
        </div>

        {message && <div id="payment-message">{message}</div>}
      </Form>
    </div>
  );
}
