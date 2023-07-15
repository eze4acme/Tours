import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  return( <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        
      </div>
    </footer>
  </article>)
};

export default Tour;
