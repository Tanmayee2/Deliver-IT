import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Navbarmain from "../../components/NavBar/Navbarmain";

function SearchPageManager() {
  const [query, setQuery] = useState("");
  const [employeeResults, setEmployeeResults] = useState([]);
  const navigate = useNavigate();

  const handleEmployeeSearch = async () => {
    const response = await fetch("/api/searchEmployees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setEmployeeResults(data);
  };

  return (
    <>
      <Navbarmain />

      <Form>
        <Form.Group>
          <Form.Label>Search Employees</Form.Label>
          <InputGroup className="ms-3 mt-3">
            {" "}
            <Form.Control
              type="text"
              placeholder="Search employees by name or status"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              className=" px-4"
              onClick={handleEmployeeSearch}
              label="Search Employee"
            >
              Search
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>

      <ul>
        {employeeResults.map((emp) => (
          <li key={emp.id}>
            {emp.name} - Status: {emp.status}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchPageManager;
