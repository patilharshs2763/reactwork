import { useState } from "react";
import './Pretest.css';

function Pretest() {
    const [que1, setQue1] = useState(undefined);
    const [que2, setQue2] = useState(undefined);
    const [que3, setQue3] = useState(undefined);
    const [que4, setQue4] = useState(undefined);
    const [que5, setQue5] = useState(undefined);

    function handleSubmit() {
        // Check if all questions are answered
        if (que1 === undefined || que2 === undefined || que3 === undefined || que4 === undefined || que5 === undefined) {
            alert("Please answer all questions before submitting.");
            return;
        }

        // Calculate score
        let score = 0;
        if (que1 === "option2") {
            score++;
        }
        if (que2 === "option3") {
            score++;
        }
        if (que3 === "option2") {
            score++;
        }
        if (que4 === "option3") {
            score++;
        }
        if (que5 === "option2") {
            score++;
        }

        alert(`Your Score is: ${score}`);
    }

    return (
        <div className="section-main-divs">
            <div className="section-heading">Pre-Test</div>
            <div className="main-section-div1">
                <div className="questions-div">
                    <div className="que-div">Q1. What is React?</div>
                    <div className="options-div">
                        <label><input type="radio" name="que1" value="option1" onClick={(e) => setQue1(e.target.value)} /> A JavaScript framework</label>
                        <label><input type="radio" name="que1" value="option2" onClick={(e) => setQue1(e.target.value)} /> A JavaScript library for building user interfaces</label>
                        <label><input type="radio" name="que1" value="option3" onClick={(e) => setQue1(e.target.value)} /> A CSS framework</label>
                        <label><input type="radio" name="que1" value="option4" onClick={(e) => setQue1(e.target.value)} /> A server-side technology</label>
                    </div>
                </div>

                <div className="questions-div" style={{ marginTop: "30px" }}>
                    <div className="que-div">Q2. What is the primary purpose of JSX in React?</div>
                    <div className="options-div">
                        <label><input type="radio" name="que2" value="option1" onClick={(e) => setQue2(e.target.value)} /> To define the styling of components</label>
                        <label><input type="radio" name="que2" value="option2" onClick={(e) => setQue2(e.target.value)} /> To make the code more readable</label>
                        <label><input type="radio" name="que2" value="option3" onClick={(e) => setQue2(e.target.value)} /> To allow HTML-like syntax in JavaScript</label>
                        <label><input type="radio" name="que2" value="option4" onClick={(e) => setQue2(e.target.value)} /> To manage state in React components</label>
                    </div>
                </div>

                <div className="questions-div" style={{ marginTop: "30px" }}>
                    <div className="que-div">Q3. Which of the following is used to manage the state in a functional React component?</div>
                    <div className="options-div">
                        <label><input type="radio" name="que3" value="option1" onClick={(e) => setQue3(e.target.value)} /> class-based components</label>
                        <label><input type="radio" name="que3" value="option2" onClick={(e) => setQue3(e.target.value)} /> useState hook</label>
                        <label><input type="radio" name="que3" value="option3" onClick={(e) => setQue3(e.target.value)} /> componentDidMount lifecycle method</label>
                        <label><input type="radio" name="que3" value="option4" onClick={(e) => setQue3(e.target.value)} /> setState method</label>
                    </div>
                </div>

                <div className="questions-div" style={{ marginTop: "30px" }}>
                    <div className="que-div">Q4. What is the role of the render() method in a React component?</div>
                    <div className="options-div">
                        <label><input type="radio" name="que4" value="option1" onClick={(e) => setQue4(e.target.value)} /> To update the state of the component</label>
                        <label><input type="radio" name="que4" value="option2" onClick={(e) => setQue4(e.target.value)} /> To execute lifecycle methods</label>
                        <label><input type="radio" name="que4" value="option3" onClick={(e) => setQue4(e.target.value)} /> To define how the UI is displayed</label>
                        <label><input type="radio" name="que4" value="option4" onClick={(e) => setQue4(e.target.value)} /> To handle events like clicks</label>
                    </div>
                </div>

                <div className="questions-div" style={{ marginTop: "30px" }}>
                    <div className="que-div">Q5. How do you pass data from a parent component to a child component in React?</div>
                    <div className="options-div">
                        <label><input type="radio" name="que5" value="option1" onClick={(e) => setQue5(e.target.value)} /> By using the useState hook</label>
                        <label><input type="radio" name="que5" value="option2" onClick={(e) => setQue5(e.target.value)} /> By using props</label>
                        <label><input type="radio" name="que5" value="option3" onClick={(e) => setQue5(e.target.value)} /> By using the setState method</label>
                        <label><input type="radio" name="que5" value="option4" onClick={(e) => setQue5(e.target.value)} /> By using the useEffect hook</label>
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Pretest;
