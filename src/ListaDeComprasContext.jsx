import React, { createContext, useState } from 'react';

const ListaDeComprasContext = createContext();

const ListaDeComprasProvider = ({ children }) => {
  const [itens, setItens] = useState([]);

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
  };

  const removerItem = (indice) => {
    const novaLista = [...itens];
    novaLista.splice(indice, 1);
    setItens(novaLista);
  };

  return (
    <ListaDeComprasContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </ListaDeComprasContext.Provider>
  );
};

export { ListaDeComprasProvider, ListaDeComprasContext };
