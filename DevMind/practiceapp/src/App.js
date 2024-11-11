// import logo from './logo.svg';
import './App.css';
import CompB from './Components/CompB/CompB';
import ArrayMethods from './Components/Pages/ArrayMethods';
import Calculator from './Components/Pages/Calculator';
import Counter from './Components/Pages/Counter';
import CounterUseEffect from './Components/Pages/CounterUseEffect';
import EventClick from './Components/Pages/EventClick';
import Greeting from './Components/Pages/Greeting';
import Object from './Components/Pages/Object';
import Operators from './Components/Pages/Operators';
import StudentForm from './Components/Pages/StudentForm';
import Test from './Components/Pages/Test';



function App() {
  return (
    <div>
      {/* <div className="App">
        <EventClick />

      </div>
      <div>
        <Operators />
        <ArrayMethods />
        <Object />
        <hr />
        Test comp
        <Test />
        <hr />
        <CompB Name="Akki"
          roll="122"
          number="924569878"
          className="Bsc"
          address="Kolhapur"
          phoneNumber="0231258985" />
      </div>
      <hr />
      <Greeting />
      <hr /> */}
      <Counter />
      <hr />
      {/* <Calculator /> */}
      {/* <hr /> */}
      {/* <StudentForm /> */}
      {/* <hr /> */}
      {/* useEffect comp */}
      <CounterUseEffect />
    </div>

  );
}
export default App;
