import React, { useEffect, useState } from 'react';

import './style.scss';

function Pagination({ page, totalPages, nextPage, hasNextPage, prevPage, hasPrevPage, goToPage }) {
  const [pagesNumbers, setPagesNumbers] = useState([]);

  useEffect(() => {
    generatePaginationElements();
  }, [page])

  const generatePaginationElements = () => {
    const numbersArray = [];
    if ((page - 3) < 0) {
      numbersArray.push({ page: 1, showOnMobile: true }, { page: 2, showOnMobile: true }, { page: 3, showOnMobile: true }, { page: 4, showOnMobile: false }, { page: 5, showOnMobile: false }, { page: 6, showOnMobile: false });
    } else if ((page + 3) > totalPages) {
      numbersArray.push({ page: totalPages - 5, showOnMobile: false }, { page: totalPages - 4, showOnMobile: false }, { page: totalPages - 3, showOnMobile: false }, { page: totalPages - 2, showOnMobile: true }, { page: totalPages - 1, showOnMobile: true }, { page: totalPages, showOnMobile: true })
    } else {
      numbersArray.push({ page: page - 2, showOnMobile: false }, { page: page - 1, showOnMobile: true }, { page, showOnMobile: true }, { page: page + 1, showOnMobile: true }, { page: page + 2, showOnMobile: false }, { page: page + 3, showOnMobile: false });
    }
    setPagesNumbers(numbersArray);
  }

  return (
    <div className="pagination">
      <div className={"arrow-left " + (hasPrevPage ? 'opacity-100' : '')} onClick={prevPage}></div>

      {pagesNumbers && pagesNumbers.map((n, index) => (
        <div key={index} onClick={() => goToPage(n.page)} className={`button char-${n.page.toString().length}` + (n.page === page ? ' selected' : '') + (n.showOnMobile ? ' small-screen' : '')}>{n.page}</div>
      ))}

      <div className={"arrow-right " + (hasNextPage ? 'opacity-100' : '')} onClick={nextPage}></div>
    </div>
  );
}

export default Pagination;