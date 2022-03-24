function Selection(props) {
    const handleChange = ({target}) => {
        props.handleSelection(target.value);
    }
    
    return (
        <select className="btn selection" onChange={handleChange}>
            <option defaultValue="Astar">A* algorithm</option>
            <option value="Dfs">Depth-first search</option>
            <option value="Bfs">Breadth-first search</option>
        </select>
    );
}

export default Selection;