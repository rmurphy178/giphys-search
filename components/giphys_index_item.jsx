import React from 'react';

function GiphysIndex({ giphys }) {
  return (
    <ul>
      { giphys.map(giphy => <GiphysIndexItem key={giphy.id} giphy={giphy} />) }
    </ul>
  );
}

export default GiphysIndex;
