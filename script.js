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
		var size = userInput.split("\n");
		var board;
		
		/*for(var j = 0; j < size.length; j++){
			for(var k = 0; k < size.length; k++){
				board[j][k] = size[j].charAt(k);
			}
		}*/
		
		// Search every possibility on the board recursively
		for(var i = 0; i < size.length; i++){
				
		}
		
        var answer = 'Word: "", Score: ' + topScore; 
        $('#mazeSolution').html(answer);
        event.preventDefault();
    });
	
	// Function that recursively walks the board and looks at all possibilities
	function boardWalk(){
		/* Making an obviously false assumption that the user won't pass in
			invalid boards containing unequal numbers of rows and columns, 
			or things like blank rows or invalid symbols.
			Given more time rectangles could be supported if it was 
			desired.*/

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


