import { NavLink } from "react-router-dom"
import miniTv from '../../assets/miniTv.jpeg'
const MiniTv = () => {
  return (
    <div className="mini-tv">
        <NavLink to="https://www.amazon.in/minitv/tp/6fc25bf8-cfeb-4e2c-8a9b-9acc67a393fa?aref=Jl1dkxH1fS&aaxitk=280106d0dfed837080290d28220c6b8d&dplnk=mIngress&mtv_pt=gateway&refMarker=avod_in_gw_ad_dBTF_Open_Dillogical"><img src={miniTv} alt="" /></NavLink>
    </div>
  )
}

export default MiniTv