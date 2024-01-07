/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let orangesRottenFlag = false, timetaken = 0;;

    while(orangesRottenFlag != true) {
        orangesRottenFlag = true;
        for(let i=0;i<grid.length;i++) {
            for(let j=0;j<grid[0].length;j++) {
                if(grid[i][j] == 2) {
                    orangesRottenFlag = false;
                    if(i>0 && grid[i-1][j] == 1) {
                        console.log({i:i-1,j});
                    }

                    if(j>0 && grid[i][j-1] == 1) {
                        console.log({i,j:j-1});
                    }

                    if(i<grid.length - 1 && grid[i+1][j] == 1) {
                        console.log({i:i+1,j});
                    }

                    if(j<grid[i].length - 1 && grid[i][j+1] == 1) {
                        console.log({i,j:j+1});
                    }
                }
            } 
        }
    }
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));