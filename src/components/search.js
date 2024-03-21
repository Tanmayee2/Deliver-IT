import React, { useState } from 'react';
import './search.css';

function SearchPage() {
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [results, setResults] = useState([]);

    // Hardcoded list of employees
    const hardcodedEmployees = [
        { employeeNumber: '001', employeeName: 'John Doe' },
        { employeeNumber: '002', employeeName: 'Jane Smith' },
        { employeeNumber: '003', employeeName: 'Bob Johnson' },
        { employeeNumber: '004', employeeName: 'Alice Williams' },
        { employeeNumber: '005', employeeName: 'Charlie Brown' },
        { employeeNumber: '006', employeeName: 'Eva Davis' },
        { employeeNumber: '007', employeeName: 'Michael Miller' },
        { employeeNumber: '008', employeeName: 'Sarah Wilson' },
        { employeeNumber: '009', employeeName: 'Daniel Garcia' },
        { employeeNumber: '010', employeeName: 'Emily Taylor' },
        { employeeNumber: '011', employeeName: 'Ryan Thomas' },
        { employeeNumber: '012', employeeName: 'Olivia Robinson' },
        { employeeNumber: '013', employeeName: 'Matthew Martinez' },
        { employeeNumber: '014', employeeName: 'Grace Anderson' },
        { employeeNumber: '015', employeeName: 'Nathan White' },
        { employeeNumber: '016', employeeName: 'Lily Garcia' },
        { employeeNumber: '017', employeeName: 'Brian Brown' },
        { employeeNumber: '018', employeeName: 'Sophia Johnson' },
        { employeeNumber: '019', employeeName: 'Jordan Davis' },
        { employeeNumber: '020', employeeName: 'Catherine Lee' },
    ];

    const handleSearch = (event) => {
        event.preventDefault();

        const filteredResults = hardcodedEmployees.filter((employee) => {
            const matchesNumber = employeeNumber && employee.employeeNumber.includes(employeeNumber);
            const matchesName = employeeName && employee.employeeName.toLowerCase().includes(employeeName.toLowerCase());

            return matchesNumber || matchesName;
        });

        if (filteredResults.length === 0) {
            setResults(['No Employees Found!']);
        } else {
            setResults(filteredResults.map((employee) => `${employee.employeeNumber} - ${employee.employeeName}`));
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="number"
                    className="search-input"
                    placeholder="Employee Number"
                    value={employeeNumber}
                    onChange={(e) => setEmployeeNumber(e.target.value)}
                />
                <input
                    type="text"
                    className="search-input"
                    placeholder="Employee Name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <ul className="results-list">
                {results.map((result, index) => (
                    <li key={index} className="result-item">
                        {result}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;