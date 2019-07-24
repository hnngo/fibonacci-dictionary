import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const indexes = await axios.get('/api/values/all');
    setSeenIndexes(indexes.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('/api/values', {
      index
    });

    setIndex("");
  }

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  });

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(", ");
  }

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      )
    }

    return entries;
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter a number</label>
        <input
          values={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
}

export default Fib;
