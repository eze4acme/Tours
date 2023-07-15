import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  // console.log(removeTour);
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
            return <Tour key={id} {...tour} removeTour ={removeTour}/>;
          })
        }
      </div>
    </section>
  )
};

export default Tours;
