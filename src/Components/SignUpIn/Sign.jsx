import { NavLink } from "react-router-dom"
import './Sign.css'
const Sign = () => {
  return (
    <div className="sign">
        <p>See personalized recommendations</p>
        <button>Sign in</button>
        <span>New customer? <NavLink to="https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex">Start here.</NavLink> </span>
    </div>
  )
}

export default Sign