import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="top">
        <div className="text upper">
          <span className="strong">BUSCA KITSU</span>&nbsp;
          TESTE FRONT-END
        <span className="end">NELSON BORALLI NETO</span>
        </div>

        <div className="input-box">
          <span className="text">Nome do Personagem</span> <br />
          <input type="text" />
        </div>

        <table className="hero-table">
          <thead>
            <tr>
              <th>Personagem</th>
              <th class="description">Descrição</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="image-block">
                  <div style={{ position: 'relative', height: 58, width: 58, overflow: 'hidden', borderRadius: '50%' }}>
                    <img src="https://media.kitsu.io/characters/images/1/original.jpg?1483096805" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <span style={{ paddingLeft: 25 }}>Jet Black</span>
                </div>
              </td>
              <td class="description">Jet, known on his home satellite as the \"Black Dog\" for his tenacity, is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series. Physically, Jet is very tall with a muscular build. He wears a beard with no mustache, and is completely bald save for</td>
            </tr>
            <tr>
              <td>
                <div className="image-block">
                  <div style={{ position: 'relative', height: 58, width: 58, overflow: 'hidden', borderRadius: '50%' }}>
                    <img src="https://media.kitsu.io/characters/images/2/original.jpg?1483096805" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <span style={{ paddingLeft: 25 }}>Spike Spiegel</span>
                </div>
              </td>
              <td class="description">Height: 185 cm (6' 1\").Weight: 70 kg (155 lbs).Blood type: O.Date of Birth: June 26, 2044.Planet of Origin: Mars.Spike Spiegel is a tall and lean 27-year-old bounty hunter born on Mars. The inspiration for Spike is found in martial artist Bruce Lee who uses the martial arts styl</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bottom">
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

        <div className="footer"></div>
      </div>

    </div>
  );
}

export default App;
