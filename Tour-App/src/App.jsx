import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id)=> {
    tours.filter(tour =>{
    const newTours =  tour.id !== id
       return setTours(newTours); 
    })
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
    console.log("render");
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App
