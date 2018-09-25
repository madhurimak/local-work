var whoesTurn = 1;
function nextTurn() {
    if(whoesTurn == 4){
        whoesTurn = 1;
    }
    else{
        whoesTurn++;
    }
    var a = document.getElementById('player- '+ whoesTurn + ' -home');
    a.classList.add('highlight-red');
}