import NavBar from "./components/navbar/NavBar" 
import Hero from "./components/Hero/Hero"
import Title from "./components/Title/Title"
 import Dolls from "./components/Dolls/Dolls" 
 import About from "./components/About/About"
 import Gallery from "./components/Gallery/Gallery"
 import Testimonials from "./components/Testimonials/Testimonials"
 import Contact from "./components/Contact/Contact"
 import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
     < NavBar />
     <Hero />
     <Title subtitle='choose your doll'  title='Our Most Famous Sells'/>
     <div className="container">     <Dolls />
     </div>
     < About />
     <Title subtitle='Collection'  title='Best Selling Dolls'/>
     < Gallery />
     <Title subtitle='TESTIMONIALS'  title='What Clients Say'/>
     <Testimonials />
     <Title subtitle='CONTACT US'  title='Know More'/>
     <Contact />
     <Footer />
    </div>
  )
}

export default App