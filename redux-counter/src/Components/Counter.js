import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <div>
                <p className="counter_title"></p>

            </div>

            <div className="card border-success mt-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Counter Example</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Counter: {counter}</h5>
                    <button type="button" class="btn btn-outline-success me-5" onClick={increment}>Increment</button>
                    <button type="button" className="btn btn-outline-danger" onClick={decrement}>Decrement</button>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    counter: state.counter
    //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);