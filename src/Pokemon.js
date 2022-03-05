import React from 'react';

const Pokemon = ({ dados }) => {
  return (
    <div>
      <h1>{dados.name}</h1>
      <img
        style={{ width: '200px', height: '200px' }}
        src={dados.sprites.other.dream_world.front_default}
        alt=""
      />
    </div>
  );
};

export default Pokemon;
