import React, { useState } from 'react';
import './search.css';
function SearchPage() {
    const [query, setQuery] = useState('');
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [speed, setSpeed] = useState('');
    const [reliability, setReliability] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/search?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                setResults(data);
            })
            .catch(error => {
                console.error('No items match', error);
                setResults([]);
            });
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="filters">
                    <input
                        type="number"
                        className="filter-input"
                        placeholder="Max distance (miles)"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                    <input
                        type="number"
                        className="filter-input"
                        placeholder="Max price ($)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <select
                        type="number"
                        className="filter-input"
                        placeholder="Speed (Days)"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        >
                        <option value="">Select reliability</option>
                        <option value="1-3">Fast</option>
                        <option value="3-5">Normal</option>
                        <option value="5+">Slow</option>
                    </select>
                    <select
                        className="filter-input"
                        value={reliability}
                        onChange={(e) => setReliability(e.target.value)}
                    >
                        <option value="">Select reliability</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <button type="submit" className="search-button">Search</button>
            </form>
            <ul className="results-list">
                {results.map((result, index) => (
                    <li key={index} className="result-item">{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;