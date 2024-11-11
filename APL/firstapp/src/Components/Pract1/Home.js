import React, { Component } from "react";
import style from "./Home.module.css";
class Home extends Component {
    render() {
        return (
            <div className={style}>
                {/* <div className="hero-main"> */}
                <h1 className="title" style={{ color: 'red' }}>APL LAB</h1>
                {/* </div> */}
            </div>
        )
    }
}
export default Home;

