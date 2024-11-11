import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './Components/Register/Index';
import LoginForm from './Components/Login/Index';
import Navbar from './Components/Navbar/index'
import { Home } from './Components/Home/Home';
import { Contact } from './Components/Pages/Contact';
import { About } from './Components/Pages/About';
import { Product } from './Components/Pages/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<AddUser />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
