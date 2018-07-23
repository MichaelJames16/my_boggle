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
		boardWalk(len, 0, 0);
		
        var answer = 'Word: "", Score: ' + topScore; 
        $('#mazeSolution').html(len);
        event.preventDefault();
    });
	
	// Function that recursively walks the board and looks at all possibilities
	// Takes the size of the board and the position
	function boardWalk(size, row, col){
		/* Making an obviously false assumption that the user won't pass in
			invalid boards containing unequal numbers of rows and columns, 
			or things like blank rows or invalid symbols.
			Given more time rectangles could be supported if it was 
			desired.*/

		// Probably need a visited tag of some kind so I don't overlap	
			
		/*	
		[0, 1, 2]
		[3, 4, 5]
		[6, 7, 8]
		*/
		
		// Corners and edges
		// Top left
		if (row == 0 && col == 0){
			
		}
		// Top right
		else if (row == 0 && col == (size - 1)){
			
		}
		// Bottom left
		else if (row == (size-1) && col == 0){
			
		}
		// Bottom right
		else if (row == (size-1) && col == (size-1)){
			
		}
		// Top side, not in the corners
		else if (row == 0){
			
		}
		// Bottom side, not in the corners
		else if (row == 1){
			
		}
		// Left side, not in the corners
		else if (col == 0){
			
		}
		// Right side, not in the corners
		else if (col == 1){
			
		}
		
		// Outer loop to walk through each position
		for(var i = pos; i < size; i++){
			for(var j = 0;)
		}
	
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


