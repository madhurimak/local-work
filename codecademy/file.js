const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('error message');
    }
  }

  function getComputerChoice(){
   var randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'error messsage';
        break;
    }
  }

  function determineWinner(userChoice,computerChoice){
    if(userChoice === 'bomb'){
      return 'you destoryed your opponent, congrats!';
    }
    if(userChoice === computerChoice){
      return 'The game is a tie!'
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      }else{
              return 'The user won!';
      }
    }

     if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer won!';
      }else{
              return 'The user won!';
      }
    }

     if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      }else{
              return 'The user won!';
      }
    }
  }

  function playGame(){
    var userChoice = getUserChoice('paper');
       var computerChoice =  getComputerChoice();

    console.log('you threw: ' + userChoice);
    console.log('The computer threw: '+ computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }

  playGame();