
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Boking from './components/Boking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <TopBar/>
     <Navbar/>
     <Hero/>
     <Activities/>
     <Boking/>
     <Gallery/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
