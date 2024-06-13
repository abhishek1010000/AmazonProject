import './AddToCard.css'

const AddToCard = () => {
  return (
    <div className="cart-page">
        <div className="add-items">
            <img src="aa" alt="a" />
            <p></p>
            <b></b>
        </div>
        <div className="checkout">
            <div className="total">
                <h2>Total Items: $0</h2>
                <h2>Total Price: $0</h2>
                <button>CheckOut</button>
            </div>
        </div>
    </div>
  )
}

export default AddToCard