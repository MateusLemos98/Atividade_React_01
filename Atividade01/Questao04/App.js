import React, { useState } from 'react';

function MeuInput() {
  const [valor, setValor] = useState('');

  function handleChange(event) {
    setValor(event.target.value);
  }

  return (
    <div>
      <input type="text" value={valor} onChange={handleChange} />
      <p>{valor}</p>
    </div>
  );
}

export default MeuInput;