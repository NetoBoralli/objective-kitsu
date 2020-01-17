import React from 'react';

import HeaderText from '../../components/header-text';
import Input from '../../components/input';

import './index.scss';

function Main() {
  return (
    <div className="container">
      <div className="top">
        <HeaderText />
        <Input />
      </div>

      <div className="bottom">

      </div>
    </div>
  );
}

export default Main;