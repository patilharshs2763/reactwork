import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayUsers from './Components/UserFetch/index'
import AddUser from './Components/Register/AddUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DisplayUsers />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:updatedUserId" element={<AddUser />} />
        </Routes>
      </Router>
      {/* <DisplayUsers /> */}
    </div>
  );
}

export default App;
