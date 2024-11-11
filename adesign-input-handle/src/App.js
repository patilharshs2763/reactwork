import './App.css';
import FillForm from './FillForm';
import FormTable from './FormTable';
import { Divider } from 'antd';

function App() {
  return (
    <div className="App">
      <h1>Ant Design</h1>
      <FillForm />
      <Divider>Table Example</Divider>
      {/* <FormTable /> */}
    </div>
  );
}

export default App;
