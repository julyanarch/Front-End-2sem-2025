import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = (e) => {
    e.preventDefault();
    if (item.trim() === '') return;

    const novoItem = {
      id: Date.now(),
      texto: item,
      feito: false,
    };

    setLista([...lista, novoItem]);
    setItem('');
  };

  const marcarFeito = (id) => {
    const novaLista = lista.map((i) =>
      i.id === id ? { ...i, feito: !i.feito } : i
    );
    setLista(novaLista);
  };

  const removerItem = (id) => {
    const novaLista = lista.filter((i) => i.id !== id);
    setLista(novaLista);
  };

  return (
    <div className="container">
      <h1>📝 Minha Lista </h1>
      <form onSubmit={adicionarItem}>
        <input
          type="text"
          placeholder="Digite uma tarefa ou item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {lista.map((i) => (
          <li key={i.id} className={i.feito ? 'feito' : ''}>
            <span onClick={() => marcarFeito(i.id)}>{i.texto}</span>
            <button onClick={() => removerItem(i.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
