'use strict'

const container = document.getElementById('grid_container')

const gameBoardGame = () => {
    let gameBoard = new Array(9);
    let computations = 0;

    function rematch(){
        container.innerHTML = ''
        createGameBoard()
    }

    function endGame(winner){
        container.innerHTML = ''
        computations = 0;
        gameBoard.splice(0, gameBoard.length)

        const winner_text = document.createElement('h1')
        const winner_tex = document.createTextNode('Congratulations ' + winner + " you've won the game! Care for a rematch?")
        winner_text.appendChild(winner_tex)

        const retryButton = document.createElement('button')
        const retryButtonText = document.createTextNode('Rematch!')
        retryButton.appendChild(retryButtonText)
        retryButton.addEventListener('click', rematch)

        container.appendChild(winner_text)
        container.appendChild(retryButton)
    }

    function whoWon(){
        //Rows

        if(gameBoard[0] === 'X' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]){
            endGame('Player one')
        }
        else if(gameBoard[0] == 'O' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]){
            endGame('Player two')
        }
        if(gameBoard[3] === 'X' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]){
            endGame('Player one')
        }
        else if(gameBoard[3] === 'O' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]){
            endGame('Player two')
        }
        if(gameBoard[6] === 'X' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]){
            endGame('Player one')
        }
        else if(gameBoard[6] === 'O' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]){
            endGame('Player two')
        }

        //Columns
        if(gameBoard[0] === 'X' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]){
            endGame('Player one')
        }
        else if(gameBoard[0] === 'O' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]){
            endGame('Player two')
        }
        if(gameBoard[1] === 'X' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]){
            endGame('Player one')
        }
        else if(gameBoard[1] === 'O' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]){
            endGame('Player two')
        }
        if(gameBoard[2] === 'X' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]){
            endGame('Player one')
        }
        else if(gameBoard[2] === 'O' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]){
            endGame('Player two')
        }

        //Diagonals
        if(gameBoard[0] === 'X' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]){
            endGame('Player one')
        }
        else if(gameBoard[0] === 'O' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]){
            endGame('Player two')
        }
        if(gameBoard[2] === 'X' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]){
            endGame('Player one')
        }
        else if(gameBoard[2] === 'O' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]){
            endGame('Player two')
        }


    }
    function gameEnd(){
        if(computations == 9){
            container.innerHTML = ''
            const TieText = document.createElement('h1')
            const TieTex = document.createTextNode("You have tied, good try on both players! Care for a rematch?")
            TieText.appendChild(TieTex)

            container.appendChild(TieText)
        }
    }
    const createGameBoard = function(){
       //This is the worst code I've ever made
       //But like the reasons is fine
       //I needed to append these squares to the gameBoard array to determine whats a winning position
       //But I cant with a for loop becasue block scope hahahaahah
       //Also the onclick functions were a total mistake cause i forgot that i made a reusable one
       //But it works so whatever
       
       //Create Grid

       let square1 = document.createElement('div')
       let square2 = document.createElement('div')
       let square3 = document.createElement('div')
       let square4 = document.createElement('div')
       let square5 = document.createElement('div')
       let square6 = document.createElement('div')
       let square7 = document.createElement('div')
       let square8 = document.createElement('div')
       let square9 = document.createElement('div')

       //Add styling

       square1.classList.add('cell')
       square2.classList.add('cell')
       square3.classList.add('cell')
       square4.classList.add('cell')
       square5.classList.add('cell')
       square6.classList.add('cell')
       square7.classList.add('cell')
       square8.classList.add('cell')
       square9.classList.add('cell')

       //Add game logic 
       
       square1.onclick = function(){
            if(computations % 2 == 0){
                square1.textContent = "X"
                square1.classList.add('x')
                square1.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[0] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square1.textContent = "O"
                square1.classList.add('o')
                square1.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[0] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square2.onclick = function(){
            if(computations % 2 == 0){
                square2.textContent = "X"
                square2.classList.add('x')
                square2.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[1] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square2.textContent = "O"
                square2.classList.add('o')
                square2.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[1] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square3.onclick = function(){
            if(computations % 2 == 0){
                square3.textContent = "X"
                square3.classList.add('x')
                square3.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[2] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square3.textContent = "O"
                square3.classList.add('o')
                square3.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[2] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square4.onclick = function(){
            if(computations % 2 == 0){
                square4.textContent = "X"
                square4.classList.add('x')
                square4.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[3] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square4.textContent = "O"
                square4.classList.add('o')
                square4.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[3] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square5.onclick = function(){
            if(computations % 2 == 0){
                square5.textContent = "X"
                square5.classList.add('x')
                square5.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[4] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square5.textContent = "O"
                square5.classList.add('o')
                square5.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[4] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square6.onclick = function(){
            if(computations % 2 == 0){
                square6.textContent = "X"
                square6.classList.add('x')
                square6.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[5] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square6.textContent = "O"
                square6.classList.add('o')
                square6.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[5] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square7.onclick = function(){
            if(computations % 2 == 0){
                square7.textContent = "X"
                square7.classList.add('x')
                square7.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[6] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square7.textContent = "O"
                square7.classList.add('o')
                square7.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[6] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square8.onclick = function(){
            if(computations % 2 == 0){
                square8.textContent = "X"
                square8.classList.add('x')
                square8.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[7] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square8.textContent = "O"
                square8.classList.add('o')
                square8.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[7] = 'O'
                whoWon()
                gameEnd()
            }
        }
        square9.onclick = function(){
            if(computations % 2 == 0){
                square9.textContent = "X"
                square9.classList.add('x')
                square9.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[8] = 'X'
                whoWon()
                gameEnd()
            }
            else{
                square9.textContent = "O"
                square9.classList.add('o')
                square9.onclick = function(){
                    console.log('no')
                }
                computations += 1;
                gameBoard[8] = 'O'
                whoWon()
                gameEnd()
            }
        }
        //Put into container
        container.appendChild(square1)
        container.appendChild(square2)
        container.appendChild(square3)
        container.appendChild(square4)
        container.appendChild(square5)
        container.appendChild(square6)
        container.appendChild(square7)
        container.appendChild(square8)
        container.appendChild(square9)
    }
    return {
        createGameBoard
    }
}

const Jim = gameBoardGame()
Jim.createGameBoard()
















