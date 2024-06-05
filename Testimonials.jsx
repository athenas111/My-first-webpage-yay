 import './Testimonials.css'
import nextButton from '../../assets/right.png'
import backButton from '../../assets/left.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef, useState } from 'react'
const Testimonials = () => {
     const slider = useRef();
     const [tx, setTx] = useState(0)
   
const slideForward = () => {
    if(tx > -75) {
        const newTx = tx - 25;
        setTx(newTx)
        slider.current.style.transform = `translateX(${newTx}%)`}
     
}
const slideBackward = () => {
    if(tx < 0) {
        const newTx = tx + 25;
        setTx(newTx);
        slider.current.style.transform = `translateX(${newTx}%)`;
    }
}
  return (
    <div className='testimonials'>
     <img src={backButton} alt="" className='back-btn' onClick={slideBackward}/>
     <img src={nextButton} alt="" className='next-btn' onClick={slideForward}/>
     <div className='slider'>
        <ul ref={slider}>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user1} alt="" />
                        <div>
                            <h3>Name</h3>
                            <span>City, Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam tempus, vehicula lorem nec, tempus urna.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user2} alt="" />
                        <div>
                            <h3>Name</h3>
                            <span>City, Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam tempus, vehicula lorem nec, tempus urna.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user3} alt="" />
                        <div>
                            <h3>Name</h3>
                            <span>City, Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam tempus, vehicula lorem nec, tempus urna.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user4} alt="" />
                        <div>
                            <h3>Name</h3>
                            <span>City, Country</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam tempus, vehicula lorem nec, tempus urna.</p>
                </div>
            </li>

        </ul>
     </div>
    </div>
  )
}

export default Testimonials