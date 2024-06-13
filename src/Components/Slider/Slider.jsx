import './Slider.css'
import { GrNext, GrPrevious  } from "react-icons/gr";
import { useRef } from 'react';
import pic1 from '../../assets/amazon1.jpg'
import pic2 from '../../assets/amazon2.jpg'
import pic3 from '../../assets/amazon3.jpg'
import pic4 from '../../assets/amazon4.jpg'
import pic5 from '../../assets/amazon5.jpg'
import pic6 from '../../assets/amazon6.jpg'
import pic7 from '../../assets/amazon7.jpg'
import pic8 from '../../assets/amazon8.jpg'
// import Gym from '../Gym/Gym'
// import Clothes from '../ClothesPage2/Clothes'
// import Device from '../Devices/Device'
function Slider(){

    let imageContainerRef = useRef(null)
    const images = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8]

    const prev = ()=> imageContainerRef.current.scrollLeft -=  imageContainerRef.current.clientWidth;
    const next = ()=> imageContainerRef.current.scrollLeft +=  imageContainerRef.current.clientWidth;


    return (
        <>
          <div className="page-container">
            <div className="content">
              <div className="prev" onClick={prev}> <GrPrevious /> </div>
              <div className="slide-panel" ref={imageContainerRef}>
                {images.map((image,index) => {return (<img key={index} src={image} />)})}
              </div>
              <div className="next" onClick={next}> <GrNext /> </div>
            </div>
           
          </div>
          {/* <Gym></Gym>
          <Clothes></Clothes>
          <Device /> */}
        </>
    )
}

export default Slider;