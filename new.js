function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});



var currentQuestion = 1;
var correctAnswers = 0;


var answers = {
  q1: "a", 
  q2: "c", 
  q3: "b", 
  q4: "c", 
  q5: "b",
  q6: "b", 
  q7: "c", 
  q8: "a", 
  q9: "b", 
  q10: "a" 
};

function nextQuestion(questionNumber) {
  document.getElementById("question" + questionNumber).style.display = "none";
  
  var selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  if (selectedAnswer && selectedAnswer.value === answers[`q${questionNumber}`]) {
    correctAnswers++;
  }
  

  if (questionNumber < 10) {
    document.getElementById("question" + (questionNumber + 1)).style.display = "block";
  }
}

function submitQuiz() {
  
  var selectedAnswer = document.querySelector(`input[name="q10"]:checked`);
  if (selectedAnswer && selectedAnswer.value === answers.q10) {
    correctAnswers++;
  }

  
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You scored ${correctAnswers} out of 10`;
}
