 
import './About.css'
import doll4 from '../../assets/doll4.png'
 
const About = () => {
  return (
    <div className="about">
<div className="about-left">
    <img src={doll4} alt="" className='about-img' />
    
</div>
<div className="about-right">
    <h3>ABOUT OUR WORK</h3>
    <h2>handmade costume dolls</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet turpis tempus magna dapibus interdum. Proin non porta sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
    <p>et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
</div>

    </div>
  )
}

export default About