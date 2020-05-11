/*----- constants -----*/
const winnerWord = ['Olivia', 'Hannah','Oscar', 'senorita','stacy', 'tom', 'jerry'
];

/*----- app's state (variables) -----*/
let correctLetter;
let WrongLetters;
let secretWord;
let guessWord;



/*----- cached element references -----*/
const lettersEl = document.getElementById('letters'); //chooses letter 



/*----- event listeners -----*/
lettersEl.addEventListener('click', function(evt) {
}) //clicks buttons


/*----- functions ---*/
init();

function init() {
  let randomIdx = Math.floor(Math.random() * winnerWord.length);
 secretWord = winnerWord[randomIdx];
}



/*
  
1( variables  

    1.1The secret word  
    1.2Create a blank letter board ( where each right letter will go on)
    1.3 Display of a box where user submits letter 
    1.4  The hangman board where the body parts will be display when user gets a letter wrong.
    2) Define required variables used to track the state of the game
    2.1 number of guess the user has made( wrong letter will be displayed) 6 trys
    2.2  which body parts are displayed when letter is guessd wrong (head , body , 2 feet , 2 arms)
    2.3 a try again message every time wrong letter is guessed
    2.4 check  if letter be chosen is in the secret word twice. 
    3) Defined winner or loser 
    3.1 if  user create the whole body of the person (they lose) and display a loser message 
      3.2 If user gets the right secret name , they win ( Display a winning message ) */
    
    
    
    
    
    
    
    
    
     
    
    