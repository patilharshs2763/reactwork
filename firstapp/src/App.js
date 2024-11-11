import logo from './logo.svg';
import './App.css';
import CreateUser from './Components/CreateUser/Index';
import UserList from './Components/UserList/Index';

function App() {
  return (
    <div className="App">
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
