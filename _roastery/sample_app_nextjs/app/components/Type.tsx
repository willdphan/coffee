import React, { useState } from 'react';

export default function Type() {
  const [brewType, setBrewType] = useState('');

  const handleBrewChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBrewType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Your preferred brew is: ${brewType}`);
  };

  return (
    <div>
      <h1>Select your brew type</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brewType">Choose a brew type:</label>
        <select
          id="brewType"
          value={brewType}
          onChange={handleBrewChange}
          required
        >
          <option value="">Select a brew</option>
          <option value="espresso">Espresso</option>
          <option value="latte">Latte</option>
          <option value="cappuccino">Cappuccino</option>
          <option value="americano">Americano</option>
          <option value="macchiato">Macchiato</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
