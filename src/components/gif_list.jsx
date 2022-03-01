import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, gifClickHandler }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} clickHandler={gifClickHandler} />;
      })}
    </div>
  );
};

export default GifList;
