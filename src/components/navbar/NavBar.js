import './NavBar.css';
import React, {useState} from 'react';
import Selection from './button/Selection';
import Visualize from './button/Visualize';
import Clear from './button/Clear';
import Initialize from './button/Initialize';
import Speed from './button/Speed';

function NavBar(props) {
    const [speed, setSpeed] = useState(10);
    const handleSpeed = (newSpeed) => {
        setSpeed(newSpeed);
    }

    return (
        <div className="nav-bar">
            <h1>PATH FINDING</h1>
            <ul>
                <li><Selection handleSelection={ props.handleSelection } /></li>
                <li><Clear setting={ props.setting } visitedNodes={ props.visitedNodes }/></li>
                <li><Visualize setting={ props.setting } algorithm={ props.algorithm } handleVisualize={ props.handleVisualize } grid={ props.grid } speed = {speed} /></li>
                <li><Initialize setting={ props.setting } handleInitialize={ props.handleInitialize} /></li>
                <li><Speed handleSpeed= {handleSpeed} /></li>
            </ul>
        </div>
    ) 
}


export default NavBar;