import React, { useState } from 'react';

import './style.scss';

function Table() {
  const [headers] = useState([{ name: 'Personagem', class: 'character' }, { name: 'Descrição', class: 'description' }]);

  return (
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
        <tr>
          <td>
            <div className="image-block">
              <div className="image-element" >
                <img src="https://media.kitsu.io/characters/images/1/original.jpg?1483096805" />
              </div>
              <span className="character-name">Jet Black</span>
            </div>
          </td>
          <td className="description">Jet, known on his home satellite as the \"Black Dog\" for his tenacity, is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series. Physically, Jet is very tall with a muscular build. He wears a beard with no mustache, and is completely bald save for</td>
        </tr>
        <tr>
          <td>
            <div className="image-block">
              <div className="image-element">
                <img src="https://media.kitsu.io/characters/images/2/original.jpg?1483096805" />
              </div>
              <span className="character-name">Spike Spiegel</span>
            </div>
          </td>
          <td className="description">Height: 185 cm (6' 1\").Weight: 70 kg (155 lbs).Blood type: O.Date of Birth: June 26, 2044.Planet of Origin: Mars.Spike Spiegel is a tall and lean 27-year-old bounty hunter born on Mars. The inspiration for Spike is found in martial artist Bruce Lee who uses the martial arts styl</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;