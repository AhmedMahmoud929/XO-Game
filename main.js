let turn = 'x';
let title = document.querySelector('.grid-container .title');
let allBoxs = Array.from(document.getElementsByClassName('box'));
let squares = [];
let counter = 0;




function testSquares(x, y, z) {

    if (squares[x].innerHTML == squares[y].innerHTML && squares[y].innerHTML == squares[z].innerHTML && squares[z].innerHTML != '') {
        title.innerHTML = `${squares[x].innerHTML} is the winner`;
        squares[x].style.filter = "drop-shadow(0px 0px 5px #ffd900d8) drop-shadow(0px 0px 15px #ffd9007e) drop-shadow(0px 0px 25px #ffd9003d)";
        squares[y].style.filter = "drop-shadow(0px 0px 5px #ffd900d8) drop-shadow(0px 0px 15px #ffd9007e) drop-shadow(0px 0px 25px #ffd9003d)";
        squares[z].style.filter = "drop-shadow(0px 0px 5px #ffd900d8) drop-shadow(0px 0px 15px #ffd9007e) drop-shadow(0px 0px 25px #ffd9003d)";
        squares[x].style.opacity = "1";
        squares[y].style.opacity = "1";
        squares[z].style.opacity = "1";

        setInterval(function() {
            title.innerHTML += '.'
        }, 1000)
        setTimeout(function() {
            location.reload();
        }, 3000);
        counter++;
    }


}

function winner() {
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById('boxJs' + i);
    }

    ///test cases///
    testSquares(1, 2, 3);
    testSquares(4, 5, 6);
    testSquares(7, 8, 9);
    testSquares(1, 5, 9);
    testSquares(3, 5, 7);
    testSquares(1, 4, 7);
    testSquares(2, 5, 8);
    testSquares(3, 6, 9);

}

function game(id) {
    if (turn == 'x' && document.getElementById(id).innerHTML == '') {
        document.getElementById(id).innerHTML = "X"
        turn = 'o';
        title.innerHTML = "O"
    } else if (turn == 'o' && document.getElementById(id).innerHTML == '') {
        document.getElementById(id).innerHTML = "O"
        turn = 'x';
        title.innerHTML = "X"
    }
    winner();

}