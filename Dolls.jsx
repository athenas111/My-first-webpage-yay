 import './Dolls.css'
 import doll1 from '../../assets/doll1.jpg'
 import doll2 from '../../assets/doll2.jpg'
 import doll3 from '../../assets/doll3.jpg'
const Dolls = () => {
  return (
    <div className='Dolls'>
        <div className='doll'>
            <img src={doll1} alt="" />
            <div className="caption">
            <img src="" alt="" />
            <p>Mystic Creatures</p>
            </div>
            
            
            
        </div>
        <div className='doll'>
            <img src={doll2} alt="" />
            <div className="caption">
            <img src="" alt="" />
            <p>Modern Fairytales</p>
            </div>
        </div>

        <div className='doll'>
            <img src={doll3} alt="" />
             <div className="caption">
            <img src="" alt="" />
            <p>Elves</p>
            </div>
        </div>
    </div>
  )
}

export default Dolls