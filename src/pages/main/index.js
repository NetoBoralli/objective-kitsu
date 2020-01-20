import React, { useState } from 'react';

import Input from '../../components/input';
import Table from '../../components/table';
import Footer from '../../components/footer';
import Pagination from '../../components/pagination';
import { get } from '../../services/api';

import './style.scss';

function Main() {
  const [characters, setCharacters] = useState([]);
  const [links, setLinks] = useState([]);
  const [tableDataLoaded, setTableDataLoaded] = useState(false);

  const handleLoad = async (search) => {
    setTableDataLoaded(false);
    const result = await get(search);
    setTableDataLoaded(true);
    setCharacters(result.data);
    setLinks(result.links)
    console.log(result);
  }

  return (
    <>
      <div className="top">
        <Input handleLoad={handleLoad} />
        <Table characters={characters} tableDataLoaded={tableDataLoaded}/>
      </div>

      <div className="bottom">
        <Pagination />
        <Footer />
      </div>
    </>
  );
}

export default Main;
