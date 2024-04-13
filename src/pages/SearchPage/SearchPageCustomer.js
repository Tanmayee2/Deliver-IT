import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function SearchPageCustomer() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async () => {
        const response = await fetch('http://localhost:8080/api/search/searchDelivery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ criteria: search })
        });
        const data = await response.json();
        setResults(data);
    };

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">DeliverEase</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate("/landingpage/customer")}>Home</Nav.Link>
                </Nav>
            </Navbar>

            <Form>
                <Form.Group>
                    <Form.Label>Search for Delivery Services</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter search criteria (small, large, delicate)"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
            </Form>

            <ul>
                {results.map(service => (
                    <li key={service.name}>{service.name} - Cost: ${service.cost}</li>
                ))}
            </ul>
        </Container>
    );
}

export default SearchPageCustomer;