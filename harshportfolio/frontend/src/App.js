import './App.css';
import About from './Components/About/About';
import './Components/Common.css'
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ScrollingHeader from './Components/ScrollingHeader';

function App() {
  return (
    <div className='main'>

      <Navbar />
      <ScrollingHeader />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
