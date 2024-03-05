import React from 'react';
import { TemaSetter, useTema } from './temaContext';

function App() {
  const { tema } = useTema();

  return (
    <TemaSetter initialTheme="claro">
      <div style={{ backgroundColor: tema.backgroundColor, color: tema.color }}>
        <h1>O tema atual é {tema.nome}</h1>
      </div>
    </TemaSetter>
  );
}

export default App;