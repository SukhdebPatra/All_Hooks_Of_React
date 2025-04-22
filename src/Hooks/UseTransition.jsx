import React, { useState, useTransition } from 'react'

const UseTransition = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();
  
    const handleChange = (e) => {
      setQuery(e.target.value);
      startTransition(() => {
        setResults(search(e.target.value)); // Non-urgent
      });
    };
  
    return (
      <div>
        <input value={query} onChange={handleChange} />
        {isPending ? <p>Loading...</p> : <ul>{results.map(r => <li>{r}</li>)}</ul>}
      </div>
    );
  }

export default UseTransition