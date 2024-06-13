import './DevicePage.css'
const DevicePage = (props) => {
  return (
    <div className='device-page'>
      <img src={props.src} alt="" />
      <p>{props.para}</p>
      <b>{props.price}</b><br />
      <button>Add to Cart</button>
    </div>
  )
}

export default DevicePage