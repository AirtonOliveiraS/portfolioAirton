import logo from './logo.svg';
import './App.css';
import Presentation from './components/section/Presentation';
import NavBar from './components/section/NavBar';
import Projects from './components/section/Projects';
import Footer from './components/section/Footer';
import Skills from './components/section/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
