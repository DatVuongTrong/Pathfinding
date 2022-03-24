function Dfs(startNode, endNode){
    let visitedNodes = [];
    let path = [];
    let stack = [];
    stack.push(startNode);
    while (stack.length > 0){
        var currNode = stack.pop();
        if (!currNode) break;   
        visitedNodes.push(currNode);
        if (currNode === endNode) {
            path = visitedNodes;
            return [path , visitedNodes]
        }
        
        let neighbors = currNode.neighbors;
        for (let i = 0; i < neighbors.length; i++){
            let neighbor = neighbors[i];
            if (!visitedNodes.includes(neighbor) && !neighbor.isWall){
              stack.push(neighbor);
            }
        } 
    }
    path = [];
    return [path, visitedNodes];
  }

  export default Dfs;
  