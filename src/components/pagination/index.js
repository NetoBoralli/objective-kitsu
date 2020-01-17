import React from 'react';

import './style.scss';

function Pagination() {

  return (
    <div className="pagination">
      <div className="arrow-left"></div>

      <div className="button selected small-screen">1</div>
      <div className="button small-screen">2</div>
      <div className="button small-screen">3</div>
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>

      <div className="arrow-right opacity-100"></div>
    </div>
  );
}

export default Pagination;