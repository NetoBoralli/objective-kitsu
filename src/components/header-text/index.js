import React, { useState } from 'react';

import './index.scss';

function HeaderText() {
  const [pageTitle] = useState('BUSCA KITSU');
  const [testTitle] = useState('TESTE FRONT-END');
  const [name] = useState('NELSON BORALLI NETO')

  return (
    <div className="text upper">
      <span className="strong">{pageTitle}</span>&nbsp;{testTitle}
      <span className="end">{name}</span>
    </div>
  );
}

export default HeaderText;