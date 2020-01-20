import React, { useEffect, useState } from 'react';
import { Icon } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';

import { getById, getMedias } from '../../services/api';

import './style.scss';

import RelatedMedia from '../../components/related-media';
import { formatText } from '../../util/util';

function Character(props) {
  let { id } = useParams()
  const [character, setCharacter] = useState([]);
  const [medias, setMedias] = useState([]);
  const [characterDataLoaded, setCharacterDataLoaded] = useState(false);
  const [relatedMediaLoaded, setRelatedMediaLoaded] = useState(false);

  useEffect(() => {
    loadCharacter(id);
  }, [])

  const loadCharacter = async (id) => {
    setCharacterDataLoaded(false);
    const result = await getById(id);
    setCharacter(result.data);
    setCharacterDataLoaded(true);

    setRelatedMediaLoaded(false);
    const related = await getMedias(result.data.relationships.mediaCharacters.links.related);
    setMedias(related);
    setRelatedMediaLoaded(true);
  }

  return (
    <div className="flex-column">
      <Link className="back-btn" to=""><Icon>close</Icon></Link>

      {!characterDataLoaded &&
        <div>Carregando Personagem...</div>
      }

      {characterDataLoaded &&
        <div className="data-block">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img className="character-image" alt="" src={character.attributes?.image?.original} />
            <span className="name-character name-character-small">{character.attributes?.names.en}</span>
          </div>
          <div className="flex-column-inner padding-size-12">
            <div className="top-text">
              <span className="name-character">{character.attributes?.names.en}</span> &nbsp;
            {character.attributes?.otherNames.length > 0 && (
                <span className="other-name">({character.attributes?.otherNames.join(', ')})</span>
              )}
            </div>
            <textarea className="description-character" rows="8" cols="60" value={formatText(character.attributes?.description)} readOnly={true}></textarea>
            {!relatedMediaLoaded &&
              <div>Carregando mídias relacionadas...</div>
            }
            {relatedMediaLoaded && medias &&
              <RelatedMedia medias={medias} />
            }
          </div>
        </div>
      }
    </div>
  );
}

export default Character;
