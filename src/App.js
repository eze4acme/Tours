import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, SetIsLoading] = useState(true)
  const [data, setData] = useState(url)
  useEffect(() =>{
    fetch(data)
    .then(res => res.json())
    .then(data1 => data1)
    .catch(error => console.log(error))
  },[])
  return <>
  <h2>Tours Project Setup</h2>
 { isLoading ? <Loading /> : <Tours tour={data} />}
  </>
}

export default App
