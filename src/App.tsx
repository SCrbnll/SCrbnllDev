import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AboutMe />
        <Experience />
        <p>Este es el inicio de mi nuevo Porfolio</p>
        <Footer />
      </div>
    </>
  )
}

export default App
