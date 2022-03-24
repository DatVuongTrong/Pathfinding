import React, {useState} from 'react';
import "./Pathfind.css";
import Board from './board/Board';
import NavBar from './navbar/NavBar';
import Instruction from './information/Inststruction';

function Pathfind() {
    const [Grid, setGrid] = useState([]);
    const [VisitedNodes, setVisitedNodes] = useState([]);
    const [Function, setFunction] = useState("Astar");
    const [Setting, setSetting] = useState([18, 40, 0, 0, 17, 39]);

    const handleSelection = (nameAlgo) => {
            setFunction(nameAlgo);
    };
    
    const handleVisualize = (newVistedNodes) => {
        setVisitedNodes(newVistedNodes);
    };

    const handleInitialize = (newGrid) => {
        setGrid(newGrid);
    };


    return (
        <div className="Wrapper">
            <NavBar setting = {Setting} grid={Grid} visitedNodes={VisitedNodes} algorithm={Function} handleSelection={ handleSelection } handleVisualize={ handleVisualize } handleInitialize={ handleInitialize } />
            <Instruction />
            <Board grid={Grid} setGrid={setGrid} />
        </div>
    );
};

export default Pathfind;