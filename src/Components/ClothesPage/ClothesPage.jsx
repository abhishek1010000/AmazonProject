import './ClothesPage.css'
const ClothesPage = (props) => {
  return (
    <div className='clothe-page'>
      <img src={props.src} alt="" />
      <p>{props.para}</p>
      <b>{props.price}</b><br />
      <button>Add to Cart</button>
    </div>
  )
}

export default ClothesPage