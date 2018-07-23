$(function() {
    $('#mazeForm').on('submit', function(event) {
		
		// Get user input
		var userInput = $('#mazeEntry').val();
		
		// Score words that are found
		var score = scoreWord("yayers");
		
        var answer = 'Word: "", Score: '; 
        $('#mazeSolution').html(score);
        event.preventDefault();
    });
	
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
- write a word scoring function
- write recursive board navigation
*/
});


