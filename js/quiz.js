var questions = [
 ['How many states are in the United States?', '50'],
 ['How many licks does it take to get to the center of a Tootsie Pop?', '3'], 
 ['What is the meaning of life?', '42']
];

var correctAnswer = 0;
var question;
var answer;
var response;
var html;
function print(message) {
    document.write(message);
  }

  for (var i = 0; i < questions.length; i += 1 ) {
      question = questions[i][0];
      answer = questions[i][1];
      response = parseInt(prompt(questions));
  }
  