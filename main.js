

const container = document.getElementById('grid_container')


const gameBoard = () => {
    let gameBoard = new Array(9);
    let computations = 0;

    const determineTurn = () => {
        while(computations < 9)
            let x = 0; 
            if (x % 2 == 0){
                //Code on moving player one so create a function to do that

                x++
                // computations++ add this code to function
            }
            else{
                //Code on moving player two so create a function to do that
                x++
                // computations++ add this code to function
            }
    }

    const createChecks = function(event){
        square.classList.remove('cell');
        if(computations % 2 ==0){
            square.textContent = "X"
            square.classList.add('x')
        }
        else{
            square.textContent = "O"
            square.classList.add("o")
        }
     }

    const createGameBoard = function(){
        for(i=0; i > gameBoard.length; i++){
            let square = document.createElement('div')
            square.classList.add('cell')
            square.addEventListener('click', createChecks)
            container.appendChild(square)
            
        }
        //Were going to want to do something on creating a while loop until the game ends (someone gets 3 in a row or the board is filled that can be code on if 
        // number of computations == 9)
    }
    
    return {
        createGameBoard
    }

    
}

const Player = () => {
    
    
        return{
        }
    }

