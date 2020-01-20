import React, { useState, useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import './style.scss';

function Input({ value, loadCharacters }) {
  const debounceLoad = AwesomeDebouncePromise(loadCharacters, 200)
  const [label] = useState('Nome do Personagem');

  useEffect(() => {
    document.getElementById('input').value = value;
  }, [value])

  return (
    <div className="input-box">
      <span className="text">{label}</span> <br />
      <input id="input" onChange={e => debounceLoad(e.target.value)} type="text"/>
    </div>
  );
}

export default Input;