import React, { useState } from 'react';

import './index.scss';

function Input() {
  const [label] = useState('Nome do Personagem');

  return (
    <div className="input-box">
      <span className="text">{label}</span> <br />
      <input type="text" />
    </div>
  );
}

export default Input;