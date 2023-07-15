import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  async function fetchUrl() {
    setLoading(true)
    try {
      const response = await fetch(url);
      if (response.ok) {
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  useEffect(() =>{
    fetchUrl()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return(
      <main>
        <div className="title">
          <h2>no tours left...</h2>
          <button className='btn' onClick={fetchUrl}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
