 
import './Hero.css'
import rightarrow from "../../assets/right-arrow.png"
const Hero = () => {
  return (
    <div className='Hero container'>
        <div className='hero-text'>
            <h1>Beautiful dolls to make your dreams <span className='highlight'>come true</span></h1>
            <p>make your own custom doll and see your most magical fantasies come into reality!</p>
            <button className='btn' >explore <img src={rightarrow} alt=""   /> </button>
        </div>
    </div>
  )
}

export default Hero