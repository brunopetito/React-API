import React from 'react';
import Pokemon from './Pokemon';

function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick() {
    const random = Math.floor(Math.random() * 600 + 1);
    setCarregando(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <p>Clique no botao para gerar um pokemon aleatorio</p>
      <button onClick={handleClick}>Gerar!</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Pokemon dados={dados} />}
    </div>
  );
}

export default App;
