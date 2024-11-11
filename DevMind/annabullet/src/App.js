
import './theme-common.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Homecomponent/index"
import Gallaryfunction from "./Component/Gallaryfunction/index"
import Contactpage from "./Component/Contactpage/index"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallaryfunction" element={<Gallaryfunction />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
