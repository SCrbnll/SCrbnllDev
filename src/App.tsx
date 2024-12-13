import AboutMe from "./components/AboutMe"
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
        <p>Este es el inicio de mi nuevo Porfolio</p>
      </div>
    </>
  )
}

export default App
