var whoseTurn = 1;
var currentDice = 6;
var insideCounters = [];
var outsideCounters = [];

insideCounters[1] = [1, 2, 3, 4];
insideCounters[2] = [1, 2, 3, 4];
insideCounters[3] = [1, 2, 3, 4];
insideCounters[4] = [1, 2, 3, 4];

outsideCounters[1] = [];
outsideCounters[2] = [];
outsideCounters[3] = [];
outsideCounters[4] = [];

function nextTurn() {
    var currentHome = document.getElementById('player-'+ whoseTurn + '-home');
    currentHome.classList.remove('highlight');

    if (whoseTurn == 4) {
        whoseTurn = 1;
    } else {
        whoseTurn++;
    }

    var nextHome = document.getElementById('player-'+ whoseTurn + '-home');
    nextHome.classList.add('highlight');
}

function rollDice() {
    var currentDiceElement = document.getElementById('dice-'+ currentDice);
    currentDiceElement.classList.add('hidden');

    currentDice = Math.floor(Math.random()*6) + 1;

    var nextDiceElement = document.getElementById('dice-'+ currentDice);
    nextDiceElement.classList.remove('hidden');

    // There will be player's turn again if the dice is 6.
    if (currentDice == 6) {
        giveCounterOptions();
    } else {
        // If there are no outside counters, player cannot move any counter.
        if (outsideCounters[whoseTurn].length > 0) {
            giveCounterOptions();
        }

        nextTurn();
    }
}

function giveCounterOptions() {
    var arrayLength = insideCounters[whoseTurn].length;

    for (var i = 0; i < arrayLength; i++) {
        var className = 'counter-' + insideCounters[whoseTurn][i];
        var containerElement = document.getElementById('player-' + whoseTurn + '-home');
        var counterElement = containerElement.getElementsByClassName(className)[0];

        counterElement.classList.add('highlight');
    }
}