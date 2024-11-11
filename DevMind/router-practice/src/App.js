import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from './Components/Layouts';
import EventClick from './Components/EventClick';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layouts />} />
          <Route path='/events' element={<EventClick />} />
          <Route path='/calculator' element={<Calculator />} />
          {/* </Route> */}

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
