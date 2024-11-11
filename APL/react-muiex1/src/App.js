import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './Components/Header/Index';
import Home from './Components/Home/Home';
import QuiltedImageList from './Components/Gallery';
import ActionAreaCard from './Components/Cards';
import IconTable from './Components/muiIcons';
import DashboardLayoutNavigationActions from './Components/Dashboard';
import DashboardLayoutBasic from './Components/Dashboard';

function App() {
  return (
    <div>
      {/* <DrawerAppBar /> */}
      {/* <h1 style={{ textAlign: 'center' }}>MUI icons </h1> */}
      <DashboardLayoutBasic />
      {/* <IconTable /> */}
      {/* <QuiltedImageList /> */}
      {/* <ActionAreaCard /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
