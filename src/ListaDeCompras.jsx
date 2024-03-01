import React, { useContext } from 'react';
import { ListaDeComprasContext } from './ListaDeComprasContext';

const ListaDeCompras = () => {
  const { itens, adicionarItem, removerItem } = useContext(ListaDeComprasContext);

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const novoItem = e.target.item.value;
        adicionarItem(novoItem);
        e.target.item.value = '';
      }}>
        <input type="text" name="item" />
        <button type="submit">Adicionar Item</button>
      </form>
    </div>
  );
};

export default ListaDeCompras;
