import './Instruction.css';

function Instruction() {
    return (

        <ul className="instruction">
            <li><div className="node start-node"></div><span>Start</span></li>
            <li><div className="node end-node"></div><span>End</span></li>
            <li><div className="node visited-node"></div><span>Visited</span></li>
            <li><div className="node unvisited-node"></div><span>Unvisited</span></li>
            <li><div className="node wall-node"></div><span>Wall</span></li>
            <li><div className="node path-node"></div><span>Path</span></li>
        </ul>
    );
}

export default Instruction;
