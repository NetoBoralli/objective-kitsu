import React, { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import './style.scss';

function Input({ loadCharacters }) {
  const debounceLoad = AwesomeDebouncePromise(loadCharacters, 400)
  const [label] = useState('Nome do Personagem');

  return (
    <div className="input-box">
      <span className="text">{label}</span> <br />
      <input onChange={e => debounceLoad(e.target.value)} type="text" />
    </div>
  );
}

export default Input;