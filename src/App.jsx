import './index.css'
import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Colleagues from "./sections/Colleagues.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
   <div>
    <main className="max-w-7xl mx-auto">
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Colleagues/>
        <Experience/>
        <Contact/>
        <Footer/>
    </main>
   </div>
  )
}

export default App
