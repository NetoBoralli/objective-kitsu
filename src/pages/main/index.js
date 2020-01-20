import React, { useState, useEffect } from 'react';

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
  const [totalPagesLoaded, setTotalPagesLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedPage = localStorage.getItem('page');
    if (storedPage)
      setPage(Number(storedPage))

    const storedOffset = localStorage.getItem('offset');
    if (storedOffset)
      setOffset(Number(storedOffset));

    const storedSearch = localStorage.getItem('search');
    if (storedSearch) {
      setSearch(storedSearch);
      setInputValue(storedSearch);
    }

    loadCharacters(storedSearch, storedOffset);
  }, [])

  const loadCharacters = async (search = null, selectedOffset = null) => {
    setSearchHelper(search);
    setTableDataLoaded(false);
    const result = await get(search, selectedOffset || offset);
    setTableDataLoaded(true);
    setCharacters(result.data);
    setLinks(result.links);
    setTotalPages(Math.ceil(result.meta.count / 10));
    setTotalPagesLoaded(true);
  }

  const nextPage = async () => {
    if (!links.next) return;
    setTableDataLoaded(false);
    const result = await get(null, null, links.next);
    setTableDataLoaded(true);
    setCharacters(result.data);
    setOffsetHelper(offset + 10);
    setPageHelper(page + 1);
    setLinks(result.links);
  }

  const prevPage = async () => {
    if (!links.prev) return;
    setTableDataLoaded(false);
    const result = await get(null, null, links.prev);
    setTableDataLoaded(true);
    setCharacters(result.data);
    setOffsetHelper(offset - 10);
    setPageHelper(page - 1);
    setLinks(result.links);
  }

  const goToPage = async (selectedPage) => {
    const newOffset = (selectedPage * 10) - 10;
    if (selectedPage === page) return;
    setTableDataLoaded(false);
    const result = await get(search, newOffset);
    setTableDataLoaded(true);
    setCharacters(result.data);
    setOffsetHelper(newOffset);
    setPageHelper(selectedPage);
    setLinks(result.links);
  }

  const setPageHelper = (page) => {
    localStorage.setItem('page', page);
    setPage(page);
  }

  const setOffsetHelper = (offset) => {
    localStorage.setItem('offset', offset);
    setOffset(offset);
  }

  const setSearchHelper = (search) => {
    if (search === null)
      search = '';
    localStorage.setItem('search', search);
    setSearch(search);
  }

  return (
    <>
      <div className="top">
        <Input value={inputValue} loadCharacters={loadCharacters} />
        <Table characters={characters} tableDataLoaded={tableDataLoaded} />
      </div>

      <div className="bottom">
        {totalPagesLoaded &&
          <Pagination page={page} totalPages={totalPages} nextPage={nextPage} hasNextPage={links?.next} prevPage={prevPage} hasPrevPage={links?.prev} goToPage={goToPage} />
        }
        <Footer />
      </div>
    </>
  );
}

export default Main;
