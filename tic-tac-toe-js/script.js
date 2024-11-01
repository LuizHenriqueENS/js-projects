let xTurn = true;
let gameTurn = 0
let endGame = false;
const whoPlays = document.getElementById('playersTurn')
const previouslyWinner = document.getElementById('winner')

const pos1 = document.getElementById('pos-1')
const pos2 = document.getElementById('pos-2')
const pos3 = document.getElementById('pos-3')
const pos4 = document.getElementById('pos-4')
const pos5 = document.getElementById('pos-5')
const pos6 = document.getElementById('pos-6')
const pos7 = document.getElementById('pos-7')
const pos8 = document.getElementById('pos-8')
const pos9 = document.getElementById('pos-9')

function restartGame() {
    endGame = false
    gameTurn = 0

    for (let i = 1; i < 10; i++) {
        document.getElementById(`pos-${i}`).style.color = 'black'
        document.getElementById(`pos-${i}`).innerHTML = ''
    }
}
function playGame(pos) {
    if (gameTurn === 9 || endGame)return

    if (xTurn && pos.innerHTML === '') {
        pos.innerHTML = 'X'
        xTurn = false
        whoPlays.innerHTML = 'É a vez do <u>O</u>'
    }
    else if (!xTurn && pos.innerHTML === '') {
        pos.innerHTML = 'O'
        xTurn = true
        whoPlays.innerHTML = 'É a vez do <u>X</u>'
    }
    if (gameTurn > 3) {
        gameLogic();
    }
    gameTurn++
    drawGame();
}

function drawGame() {
    if (gameTurn === 9 && !endGame) {
        previouslyWinner.innerHTML = `Não houve vencerdor!`;
        endGame = true;
        for (let i = 1; i < 10; i++) {
            document.getElementById(`pos-${i}`).style.color = "yellow"        
        }
    }
}

function gameLogic() {
    //vertical
    if (pos2.innerHTML !== '' && pos2.innerHTML === pos5.innerHTML && pos2.innerHTML === pos8.innerHTML) {
        pos5.style.color = "green";
        pos8.style.color = "green";
        pos2.style.color = "green";
        theWinner(pos2)
    }

    else if (pos1.innerHTML !== '' && pos1.innerHTML === pos4.innerHTML && pos1.innerHTML === pos7.innerHTML) {
        pos1.style.color = "green";
        pos4.style.color = "green";
        pos7.style.color = "green";
        theWinner(pos1)
    }
    else if (pos3.innerHTML !== '' && pos3.innerHTML === pos6.innerHTML && pos3.innerHTML === pos9.innerHTML) {
        pos3.style.color = "green";
        pos6.style.color = "green";
        pos9.style.color = "green";
        theWinner(pos3)
    }


    //horizontal
    else if (pos1.innerHTML !== '' && pos1.innerHTML === pos2.innerHTML && pos1.innerHTML === pos3.innerHTML) {
        pos1.style.color = "green";
        pos2.style.color = "green";
        pos3.style.color = "green";
        theWinner(pos1)
    }
    else if (pos4.innerHTML !== '' && pos4.innerHTML === pos5.innerHTML && pos4.innerHTML === pos6.innerHTML) {
        pos4.style.color = "green";
        pos5.style.color = "green";
        pos6.style.color = "green";
        theWinner(pos4)
    }
    else if (pos7.innerHTML !== '' && pos7.innerHTML === pos8.innerHTML && pos7.innerHTML === pos9.innerHTML) {
        pos7.style.color = "green";
        pos8.style.color = "green";
        pos9.style.color = "green";
        theWinner(pos7)
    }


    //diagonal
    else if (pos3.innerHTML !== '' && pos3.innerHTML === pos5.innerHTML && pos3.innerHTML === pos7.innerHTML) {
        pos3.style.color = "green";
        pos5.style.color = "green";
        pos7.style.color = "green";
        theWinner(pos5)
    }
    else if (pos1.innerHTML !== '' && pos1.innerHTML === pos5.innerHTML && pos1.innerHTML === pos9.innerHTML) {
        pos1.style.color = "green";
        pos5.style.color = "green";
        pos9.style.color = "green";
        theWinner(pos5)
    }
}

function theWinner(winner) {
    endGame = true;
    previouslyWinner.innerHTML = `O VENCEDOR ANTERIOR FOI O <u>${winner.innerHTML}</u>`
}