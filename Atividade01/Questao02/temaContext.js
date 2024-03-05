import React from 'react';

// Criando o contexto do tema
const TemaContext = React.createContext();

// Criando um provedor de contexto para fornecer o tema atual para os componentes
const TemaProvider = TemaContext.Provider;

// Criando um hook personalizado para acessar o tema atual do contexto
const useTema = () => {
  const context = React.useContext(TemaContext);
  if (!context) {
    throw new Error('useTema deve ser usado dentro de um TemaProvider');
  }
  return context;
};

// Criando um componente para definir o tema atual
const TemaSetter = ({ children, initialTheme }) => {
  const [tema, setTema] = React.useState(initialTheme);

  // Função para atualizar o tema
  const atualizarTema = (novoTema) => {
    setTema(novoTema);
  };

  // Fornecendo o tema atual e a função para atualizá-lo aos componentes filhos
  return (
    <TemaProvider value={{ tema, atualizarTema }}>
      {children}
    </TemaProvider>
  );
};

export { TemaSetter, useTema };