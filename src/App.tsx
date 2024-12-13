import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import NavBar from "./components/NavBar"
import Projects from "./components/Project"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
