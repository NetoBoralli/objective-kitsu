import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './style.scss';

function RelatedMedia({ medias }) {
  return (
    <>
      <span className="media-text">Mídias relacionadas</span>
      <div className="related-box">
        {medias.map(m => (
          <Card className="card" key={m.id}>
            <CardContent>
              <img className="card-image" alt="" src={m.posterImage} />
              <Typography className="card-title" gutterBottom>
                {m.title}
              </Typography>
              <Typography className="card-type">
                {m.type}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default RelatedMedia;