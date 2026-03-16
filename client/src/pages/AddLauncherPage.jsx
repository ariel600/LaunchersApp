import { useState } from 'react'
import { } from 'react'
import { addLauncher } from '../api/launchers'

export default function AddLauncherPage() {

  const [name, setName] = useState("")
  const [rocketType, setRocketType] = useState("")
  const [latitude, serLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [city, setCity] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    const launcher = {
      name,
      rocketType,
      latitude: Number(latitude),
      longitude: Number(longitude),
      city
    }
    await addLauncher(launcher)
  }

  return (
    <div className='add-page' >
      <form className='form-add' onSubmit={submit}>
        <input className='add-name' type="text" required placeholder='name' value={name} onChange={e => setName(e.target.value)} />
        <select className='add-select' required value={rocketType} onChange={e => setRocketType(e.target.value)} >
          <option value="">Select type launcher</option>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <input className='add-latitude' type="number" required placeholder='latitude' value={latitude} onChange={e => serLatitude(e.target.value)} />
        <input className='add-longitude' type="number" required placeholder='longitude' value={longitude} onChange={e => setLongitude(e.target.value)} />
        <input className='add-city' type="text" required placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
        <button className='add-button'>Sent</button>
      </form>
    </div>
  )
}
