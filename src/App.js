import React from 'react';
import ListaDeCompras from './ListaDeCompras';
import { ListaDeComprasProvider } from './ListaDeComprasContext';

const App = () => {
  return (
    <ListaDeComprasProvider>
      <div>
        <h1>Meu Aplicativo de Lista de Compras</h1>
        <ListaDeCompras />
      </div>
    </ListaDeComprasProvider>
  );
};

export default App;
