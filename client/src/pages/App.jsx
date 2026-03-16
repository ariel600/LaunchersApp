import { useEffect, useState } from 'react'
import { getAllLaunchers } from '../api/launchers'
import '../styles/App.css'

function App() {
  const [launchers, setLaunchers] = useState([])

  useEffect(() => {
    getAllLaunchers()
      .then(data => setLaunchers(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='home-page'>
      <h1 className='title' >List of launchers</h1>
      {
        launchers.map(launcher=>{
          <div className='cards' key={launcher._id}>
            <h2 className='name-card'>Name: {launcher.name}</h2>
            <p className='type-card'>Type: {launcher.rocketType}</p>
            <p className='city-card'>City: {launcher.city}</p>
            <p className='location-card'>Location: {launcher.longitude} X {launcher.latitude}</p>
          </div>
        })
      }
    </div>
  )
}

export default App
