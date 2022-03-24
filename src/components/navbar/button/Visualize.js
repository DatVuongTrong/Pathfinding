
import Bfs from "../../algorithm/Bfs";
import Dfs from "../../algorithm/Dfs";
import Astar from "../../algorithm/Astar";

function Visualize(props) {
    
    const grid = props.grid;
    const [rows, cols, NODE_START_ROW, NODE_START_COL, NODE_END_ROW, NODE_END_COL] = props.setting;

    const settingAlgorithm = (grid) => {
        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        const algorithm = props.algorithm;

        startNode.isWall = false;
        endNode.isWall = false;

        const selectAlgorithm = (startNode, endNode) => {
            return algorithm === "Bfs" ? Bfs(startNode, endNode) : algorithm === "Dfs" ? Dfs(startNode, endNode) : Astar(startNode, endNode);
        }

        const [newPath, newVisitedNodes] = selectAlgorithm(startNode, endNode);
                
        props.handleVisualize(newVisitedNodes);

        return [newPath, newVisitedNodes];
    }

    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i = 0; i < shortestPathNodes.length; i++){
            setTimeout(() => {
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path";
            }, 10*i)
        }
    };

    const visualizePath = () => {
        const speed = props.speed;

        document.getElementById('clear').disabled = true;
        document.getElementById('visualize').disabled = true;
        document.getElementById('initialize').disabled = true;
        
        const [path, visitedNodes] = settingAlgorithm(grid);

        console.log(path);
        console.log(visitedNodes);

        setTimeout(()=> {
            document.getElementById('clear').disabled = false;
        }, speed*visitedNodes.length + 10*path.length);

        for (let i = 0; i <= visitedNodes.length; i++){
            if (i === visitedNodes.length){
                setTimeout(() => {
                    visualizeShortestPath(path);
                }, speed * i);
            }
            else {
                setTimeout(() => {
                    const node = visitedNodes[i];
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";
                }, speed * i);
            }
        }
        
    };
    
    return <button className="btn visualize" id="visualize" onClick={visualizePath}>Visualize</button>;
}

export default Visualize;
