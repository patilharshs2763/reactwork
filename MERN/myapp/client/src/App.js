import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Logout from './Components/Login/Logout';
import Aboutus from './Components/Aboutus/Aboutus';
import ErrorPage from './Components/ErrorPage/ErrorPage';
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
    
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
