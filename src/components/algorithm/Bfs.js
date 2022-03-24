function Bfs(startNode, endNode){
  var visitedNodes = [];
  var path = [startNode];
  var queue = [];
  var node_and_path = [startNode, path];
  queue.push(node_and_path);

  // finding path using queue
  while (queue.length > 0){
    var [currNode, path_temp] = queue.shift();
    visitedNodes.push(currNode);
    if (currNode === endNode){
      var currNodeArr = [currNode];
      path =  [...path_temp,...currNodeArr];
      return [path, visitedNodes];
    }
    let neighbors = currNode.neighbors;
    // loop through all neighbors of the current node
    for (let i = 0; i < neighbors.length; i++){
      var neighbor = neighbors[i];
      var neighbor_arr = [neighbor];
      if (!visitedNodes.includes(neighbor) && !neighbor.isWall){
        visitedNodes.push(neighbor)
        node_and_path = [neighbor, [...path_temp,...neighbor_arr]];
        queue.push(node_and_path);
      }
    }
  };
  path = [];
  return [path, visitedNodes];
}

export default Bfs;