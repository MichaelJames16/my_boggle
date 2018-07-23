$(function() {
    $('#mazeForm').on('submit', function(event) {
		
		//var userInput = $('#mazeEntry').val();
		
        var answer = 'Word: "", Score: '; 
        $('#mazeSolution').html(answer);
        event.preventDefault();
    });
});