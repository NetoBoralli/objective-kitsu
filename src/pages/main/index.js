import React from 'react';

import HeaderText from '../../components/header-text';
import Input from '../../components/input';
import Table from '../../components/table';
import Footer from '../../components/footer';
import Pagination from '../../components/pagination';

import './style.scss';

function Main() {
  return (
    <div className="container">
      <div className="top">
        <HeaderText />
        <Input />
        <Table />
      </div>

      <div className="bottom">
        <Pagination />
        <Footer />
      </div>
    </div>
  );
}

export default Main;