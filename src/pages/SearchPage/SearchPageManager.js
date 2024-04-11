import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function SearchPageManager() {
    const [query, setQuery] = useState('');
    const [employeeResults, setEmployeeResults] = useState([]);
    const navigate = useNavigate();

    const handleEmployeeSearch = async () => {
        const response = await fetch('/api/searchEmployees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });
        const data = await response.json();
        setEmployeeResults(data);
    };

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">DeliverEase</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate("/landingpage/manager")}>Home</Nav.Link>
                </Nav>
            </Navbar>

            <Form>
                <Form.Group>
                    <Form.Label>Search Employees</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search employees by name or status"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleEmployeeSearch}>Search</Button>
            </Form>

            <ul>
                {employeeResults.map(emp => (
                    <li key={emp.id}>{emp.name} - Status: {emp.status}</li>
                ))}
            </ul>
        </Container>
    );
}

export default SearchPageManager;
