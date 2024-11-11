import { Outlet, Link } from "react-router-dom";
import ArrayMethods from "./ArrayMethods";
import Calculator from "./Calculator";
import Counter from "./Counter";
import CounterUseEffect from "./CounterUseEffect";
import EventClick from "./EventClick";
import Greeting from "./Greeting";
import Object from "./Object";
import Operators from "./Operators";
import StudentForm from "./StudentForm";

const Layouts = () => {
    return (
        <>
            <Link to="/"><button type="button" class="btn btn-outline-success">Home</button></Link>
            <Link to="/events"><button type="button" class="btn btn-outline-success">Events</button></Link>
            <Link to="/calculator"><button type="button" class="btn btn-outline-success">Calculator</button></Link>
            <Outlet />
            <hr />
            <Greeting />
            <hr />
            <ArrayMethods />
            <hr />
            <Calculator />
            <hr />
            <Counter />
            <hr />
            <CounterUseEffect />
            <hr />
            <EventClick />
            <hr />
            <Object />
            <hr />
            <Operators />
            <hr />
            <StudentForm />
        </>
    )
};

export default Layouts;