import React from "react";
import './SwitchDarkLight.CSS';
import { Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchDarkLight = ({ isBlackBackground, toggleBackground }) => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <span>
            <Switch
                checked={!isBlackBackground}
                className={
                    isBlackBackground
                        ? "toggle-button bg-light"
                        : "toggle-button bg-dark"
                }
                onChange={onChange}
                onClick={toggleBackground}
                checkedChildren={<FontAwesomeIcon icon={faSun} style={{ color: "#FFD700" }} />}
                unCheckedChildren={<FontAwesomeIcon icon={faMoon} style={{ color: "#4B0082" }} />}
            />
        </span>
    );
};

export default SwitchDarkLight;
