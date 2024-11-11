import './App.css';
import Feedback from './Components/Feedback/Feedback';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import AntDNavbar from './Components/Navbar/AntDNavbar';
import Dedication from './Components/Audiance/Dedication';
import Shop from './Components/Shop/Shop';
import Signs from './Components/Sign/Signs';
import Footer from './Components/Footer/Footer';
// import SimpleMap from './Components/GoogleMap/SimpleMap';
function App() {
  return (
    <div className="">
      <AntDNavbar />
      {/* <SimpleMap /> */}
      <Home />
      <Dedication />
      <Signs />
      <Shop />
      <Service />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
