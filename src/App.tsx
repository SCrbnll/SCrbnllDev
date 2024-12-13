import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Project"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AboutMe />
        <Projects />
        <Experience />
        <p>Este es el inicio de mi nuevo Porfolio</p>
        <Footer />
      </div>
    </>
  )
}

export default App
