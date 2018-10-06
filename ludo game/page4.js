var whoseTurn = 1;
var currentDice = 6;
function nextTurn() {
    var currentHome = document.getElementById('player-'+ whoseTurn + '-home');
    currentHome.classList.remove('highlight');

    if(whoseTurn == 4){
        whoseTurn = 1;
    }
    else{
        whoseTurn++;
    }

    var nextHome = document.getElementById('player-'+ whoseTurn + '-home');
    nextHome.classList.add('highlight');
}
function rollDice() {
    var currentDiceElement = document.getElementById('dice-'+ currentDice);
    currentDiceElement.classList.add('hidden');

    currentDice = Math.floor(Math.random()*6)+1;

    var nextDiceElement = document.getElementById('dice-'+ currentDice);
    nextDiceElement.classList.remove('hidden');

    if(currentDice != 6){
    nextTurn();
    }
}