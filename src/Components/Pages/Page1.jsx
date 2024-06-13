import './Page1.css'

const Page1 = (props) => {
  
  return(
    
    <div className='page1'>
      <img src={props.src} alt="" />
      <p>{props.para}</p>
      <b>{props.price}</b><br />
      <button>Add to Cart</button>
    </div>
  )
}

export default Page1