import ClothesPage from '../ClothesPage/ClothesPage'
import './Clothes.css'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'
import c7 from '../../assets/c7.jpg'
import c8 from '../../assets/c8.jpg'
import c9 from '../../assets/c9.jpg'
import c10 from '../../assets/c10.jpg'
import c11 from '../../assets/c11.jpg'
import c12 from '../../assets/c1.jpg'
const Clothes = () => {
  return (
    <div className='clothes'>
    <ClothesPage src={c1} para="Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)" price=" ₹479" />
    <ClothesPage src={c2} para="Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)" price="₹649" />
    <ClothesPage src={c3} para="LEOTUDE Men Half Sleeve Oversized Tshirt, Round Neck Longline Drop Shoulder | Colorful Printed Combo Regular Fit T-Shirt (Pack Of 3)" price="₹699" />
    <ClothesPage src={c4} para="DEELMO Men's Cotton Blend Mandarin Collar Self One Design Full Sleeve Casual Short Kurta" price=" ₹495" />
    <ClothesPage src={c5} para="BEARDO Men Cotton Bearded Cuddle Better Hooded Hoodie" price="₹995" />
    <ClothesPage src={c6} para="DEELMO Men's Cotton Blend Mandarin Collar Self One Design Full Sleeve Casual Short Kurta" price="₹494" />
    <ClothesPage src={c7} para="FUNKY MONKEY - Women's Cute Hoodies Teen Girl Winter Jacket Sweatshirts Casual Drawstring Clothes Zip Up Hoodie with Pocket" price="₹699" />
    <ClothesPage src={c8} para="Leriya Fashion Dress for Women Midi | One Piece Dress for Women | Beach Dress for Women" price=" ₹489" />
    <ClothesPage src={c9} para="ANNI DESIGNER Women Kurta with Palazzo" price="₹489." />
    <ClothesPage src={c10} para="FCV Rayon Printed Jumpsuit for Women" price=" ₹549" />
    <ClothesPage src={c11} para="LEOTUDE Women's Oversized Loppknit Drop Shoulder Hooded Neck Sweatshirt (Color Navy)" price="₹398" />
    <ClothesPage src={c12} para="London Hills Women Oversized Hoodies | Drop Shoulder Hoodie for Women | Half Sleeve Oversized Tshirt for Women | Printed Oversized t Shirts for Women" price=" ₹429" />
    </div>
  )
}

export default Clothes