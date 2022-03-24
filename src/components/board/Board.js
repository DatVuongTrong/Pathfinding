import Node from "./Node";
import './Board.css';

function Board(props) {
    const grid = props.grid;
    
    return (
        <div className="board">
            {
            grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="rowWrapper">
                        {
                            row.map((col, colIndex) => {
                                const { isStart, isEnd, isWall } = col;
                                return (
                                    <Node 
                                        key={colIndex} 
                                        isStart={isStart} 
                                        isEnd={isEnd}
                                        row={rowIndex}
                                        col={colIndex}
                                        isWall = {isWall} 
                                    />
                                );
                            })
                        }
                    </div> 
                );
            })
            }
        </div>
    );
}

export default Board;