
import './App.css'
import Header from './assets/Components/Header/Header'
import Nav from './assets/Components/Nav/Nav'
import About from './assets/Components/About/About'
import Menu from './assets/Components/Menu/Menu'
import Dishes from './assets/Components/Dishes/Dishes'
import Team from './assets/Components/Team/Team'
import Ad from './assets/Components/Ad/Ad'
import Footer from './assets/Components/Footer/Footer'
function App() {

  return (
    <>
      <Nav/>
      <Header id="home" />
      <About id="about" />
      <Menu id="menu" />
      <Dishes id="dishes" />
      <Team id="team" />
      <Ad/>
      <Footer/>
    </>
  )
}

export default App
