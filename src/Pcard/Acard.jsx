import gym from '../assets/Page14.jpg'
import clothes from '../assets/clothes.webp'
import devices from '../assets/device.webp'
import { NavLink } from 'react-router-dom'
import './Acard.css'
const ACard = () => {
  return (
    <div className="card">
        <div className="device-card cc">
          <img src={devices} alt="gym" width={500} />
          <NavLink to="/device">See more</ NavLink>
        </div>
        <div className="gym-card cc">
          <img src={gym} alt="gym" width={500} />
          <NavLink to="/gym">See more</ NavLink>
        </div>
        <div className="clothes-card cc">
          <img src={clothes} alt="gym" width={500} />
          <NavLink to="/clothes">See more</ NavLink>
        </div>
    </div>
  )
}

export default ACard