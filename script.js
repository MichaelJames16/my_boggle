$(function() {
    $('#mazeForm').on('submit', function(event) {
		
		// Get user input
		var userInput = $('#mazeEntry').val();
		
		// Highest scoring word found so far
		var topScore = 0;
		var topWord;
		
		// Current word being scored
		var currentScore;
		var currentWord;
		
		// Split user input into an array
		var board = userInput.split("\n");
		var len = board.length;
		
		// Call boardWalk with the size and position
		boardWalk(len, 0);
		
        var answer = 'Word: "", Score: ' + topScore; 
        $('#mazeSolution').html(len);
        event.preventDefault();
    });
	
	// Function that recursively walks the board and looks at all possibilities
	// Takes the size of the board and the position
	function boardWalk(size, pos){
		/* Making an obviously false assumption that the user won't pass in
			invalid boards containing unequal numbers of rows and columns, 
			or things like blank rows or invalid symbols.
			Given more time rectangles could be supported if it was 
			desired.*/

		// Special cases for corners and edges
		return 0;
		// Will need to pass in dimensions so I can keep track of position
	}
	
	// Function that walks character by character and scores words
	function scoreWord(word){
		
		// Initial score
		var score = 0;
		
		// Iterate through word and score each letter
		for(var i = 0; i < word.length; i++){
			// Check for 'y'
			if (word.charAt(i) == 'y'){
				score -= 10;
			}
			// Check for the real vowels
			else if(word.charAt(i) == 'a' ||
					word.charAt(i) == 'e' ||
					word.charAt(i) == 'i' ||
					word.charAt(i) == 'o' ||
					word.charAt(i) == 'u'){
						score += 3;
					}
			else{
				score -= 2;
			}
		}
		
		return score;
	}

/* TODO
- write recursive board navigation
*/
});


