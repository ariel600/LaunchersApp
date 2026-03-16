import { useEffect, useState } from 'react'
import { getAllLaunchers } from '../api/launchers'
import '../styles/HomePage.css'
import { Link } from 'react-router'

function HomePage() {
    const [launchers, setLaunchers] = useState([])
    const [serchCity, setSerchCity] = useState("")
    const [filterTypy, setFilterType] = useState("")

    useEffect(() => {
        getAllLaunchers()
            .then(data => setLaunchers(data))
            .catch(error => console.error(error))
    }, [])

    const filterLaunchers = launchers.filter(launcher => {
        const filterCity = launcher.city.toLowerCase().includes(serchCity.toLowerCase())
        const choiceType = filterTypy === "" || launcher.rocketType === filterTypy
        return filterCity && choiceType
    })

    return (
        <div className='home-page'>
            <h1 className='title' >List of launchers</h1>
            <select className='select-filter' value={filterTypy} onChange={e => {
                setFilterType(e.target.value)
            }}>
                <option value="">All</option>
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select>
            <input type="text" className='input-filter' placeholder='Search by city' value={serchCity} onChange={e => {
                setSerchCity(e.target.value)
            }} />
            <Link to="/addLauncher">Add launcher4</Link>
            {
                filterLaunchers.map(launcher => {
                    return (
                        <div className='cards' key={launcher._id}>
                            <h2 className='name-card'>Name: {launcher.name}</h2>
                            <p className='type-card'>Type: {launcher.rocketType}</p>
                            <p className='city-card'>City: {launcher.city}</p>
                            <p className='location-card'>Location: {launcher.longitude} X {launcher.latitude}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage
