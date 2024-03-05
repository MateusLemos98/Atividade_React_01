import React, { useState } from 'react';

function Contador() {
  // Declarando variáveis de estado
  const [contagem, setContagem] = useState(0);
  const [nome, setNome] = useState('');

  // Função para incrementar a contagem
  const incrementarContagem = () => {
    setContagem(contagem + 1);
  };

  // Função para atualizar o nome
  const atualizarNome = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <p>Olá, {nome}!</p>
      <p>Você clicou {contagem} vezes no botão.</p>
      <button onClick={incrementarContagem}>
        Clique aqui
      </button>
      <p>Digite seu nome:</p>
      <input type="text" value={nome} onChange={atualizarNome} />
    </div>
  );
}

export default Contador;