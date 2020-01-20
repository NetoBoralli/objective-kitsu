import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';

import { formatText } from '../../util/util';

function Table({ characters, tableDataLoaded }) {
  const [headers] = useState([{ name: 'Personagem', class: 'character' }, { name: 'Descrição', class: 'description' }]);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/character/${id}`);
  }

  return (
    <>
      {!tableDataLoaded &&
        <div>Carregando...</div>
      }
      {tableDataLoaded &&
        <table className="character-table">
          <thead>
            <tr>
              {
                headers.map((h, index) => (
                  <th key={index} className={h.class}>{h.name}</th>
                ))
              }
            </tr>
          </thead>

          <tbody>
            {characters && characters.map(c => (
              <tr key={c.id} onClick={() => { handleClick(c.id) }}>
                <td>
                  <div className="image-block">
                    <div className="image-element" >
                      <img alt="" src={c.attributes.image?.original} />
                    </div>
                    <span className="character-name">{c.attributes.names.en.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                </td>
                <td className="description">
                  {!c.attributes.description && 'Não possui descrição'}
                  {formatText(c.attributes.description, 200)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default Table;