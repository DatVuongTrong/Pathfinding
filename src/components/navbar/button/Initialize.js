import React, {useEffect} from 'react';

function Initialize(props) {
    const [rows, cols, NODE_START_ROW, NODE_START_COL, NODE_END_ROW, NODE_END_COL] = props.setting;

    useEffect(() => {
        initializeGrid();
    },[]);
    
    const initializeGrid = () => {
        const grid = new Array(rows);
        for (let row = 0; row < rows; row++){
            grid[row] = new Array(cols);
        }
        createSpot(grid);
        addNeighbors(grid);
        props.handleInitialize(grid);
    }

    // CREATE SPOT
    const createSpot = (grid) => {
        for (let row = 0; row < rows; row++){
            for (let col = 0; col < cols; col++){
                grid[row][col] = new Spot(row, col);
            }
        }
    }

    //Add Neighbors
    const addNeighbors = (grid) => {
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                grid[i][j].addNeighbors(grid);
            }
        }
    }

    // SPOT CONSTRUCTION
    function Spot (i, j)
    {
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.neighbors = [];
        this.isWall = Math.random(1) < 0.2;
        this.previous = undefined;
        this.addNeighbors = function(grid){
            let a = this.x;
            let b = this.y;
            if (a > 0) {this.neighbors.push(grid[a-1][b]);}
            if (b > 0) {this.neighbors.push(grid[a][b-1]);}
            if (a < rows - 1) {this.neighbors.push(grid[a+1][b]);}
            if (b < cols - 1 ) {this.neighbors.push(grid[a][b+1]);}
        };
    }

    return <button className="btn initialize" id="initialize" onClick={initializeGrid}>New Grid</button>;

}

export default Initialize;