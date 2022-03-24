import React from 'react';
import "./Node.css";

function Node(props) {
    const classes = props.isStart ? "node-start" : props.isEnd ? "node-end" : props.isWall ? "isWall" : "node-normal";
    
    return <div className={`node ${classes}`} id={`node-${props.row}-${props.col}`}></div>;
}

export default Node;