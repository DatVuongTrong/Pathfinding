function Clear(props) {
    const visitedNodes = props.visitedNodes;
    const [rows, cols, NODE_START_ROW, NODE_START_COL, NODE_END_ROW, NODE_END_COL] = props.setting;
    const clear = () => {    
        document.getElementById('visualize').disabled = false;
        document.getElementById('initialize').disabled = false;
        for (let i = 0; i < visitedNodes.length; i++)
        {
            const node = visitedNodes[i];
            document.getElementById(`node-${node.x}-${node.y}`).className = "node node-normal";    
        }
        document.getElementById(`node-${NODE_START_ROW}-${NODE_START_COL}`).className = "node node-start";
        document.getElementById(`node-${NODE_END_ROW}-${NODE_END_COL}`).className = "node node-end";
      
    }

    return <button className="btn clear" id="clear" onClick={clear}>Clear</button>; 
}

export default Clear;