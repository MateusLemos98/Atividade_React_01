import React from 'react';

const Botao = () => {
  const [contador, setContador] = React.useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
};

export default Botao;