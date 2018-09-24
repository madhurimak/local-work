var whosTurn = 1;
function nextTurn {
    if(whosTurn == 4){
        whosTurn = 1;
    }
    else{
        whosTurn++;
    }
}