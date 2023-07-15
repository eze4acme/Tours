import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return(
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
          tours.map(tour =>{
            const {id} = tour
            return <Tour key={id} {...tour} removeTours ={removeTours}/>;
          })
        }
      </div>
    </section>
  )
};

export default Tours;
