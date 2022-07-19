const container = document.querySelector('.container');
const inputQuiz = document.querySelectorAll('.quiz-input');
const btnConfirmQuiz = document.querySelectorAll('.quiz-btn');
const mgsWarning = document.querySelectorAll('.quiz-warning');
const result = document.querySelectorAll('.result');
const modalQuiz = document.querySelectorAll('.modal-quiz')
const modalStart = document.querySelector('.modal-start')
let numberQuestion = -1;
showNextModalQuiz();


function confirmQuiz(){
    if (inputQuiz[numberQuestion].value == result[numberQuestion].innerText){
        removeIncorrectsClass();
        insertCorrectsClass();
        desabledInput();
        hideBtnQuiz();
setTimeout(showNextModalQuiz, 2000);

    }else{
        removeCorrectsClass();
        insertIncorrectsClass();
        inputQuiz[numberQuestion].value = ''
        inputQuiz[numberQuestion].focus()
    }
    console.log(numberQuestion);
   
}

function removeIncorrectsClass(){
    mgsWarning[numberQuestion].classList.remove('incorrect-warning');
    inputQuiz[numberQuestion].classList.remove('incorrect-background');
}
function removeCorrectsClass(){
    mgsWarning[numberQuestion].classList.remove('correct-warning');
    inputQuiz[numberQuestion].classList.remove('correct-background');
}
function insertCorrectsClass(){
    mgsWarning[numberQuestion].classList.add('correct-warning');
    inputQuiz[numberQuestion].classList.add('correct-background');
    mgsWarning[numberQuestion].innerText = "Correto!"
}
function insertIncorrectsClass(){
    mgsWarning[numberQuestion].classList.add('incorrect-warning');
    inputQuiz[numberQuestion].classList.add('incorrect-background');
    mgsWarning[numberQuestion].innerText = "Incorreto!";
    btnConfirmQuiz[numberQuestion].innerText = 'Refazer'
}
function hideBtnQuiz(){
    btnConfirmQuiz[numberQuestion].style.display="none";
    numberQuestion++;
    
}
function desabledInput(){
    inputQuiz[numberQuestion].disabled = true;
    
    
}
function showNextModalQuiz(){
    if(numberQuestion==-1){
        modalQuiz[numberQuestion].style.display='none';
        }
    else if(numberQuestion==0){
    modalStart.style.display='none';    
    modalQuiz[numberQuestion].style.display='flex';
    } else if (numberQuestion <=9){
    modalStart.style.display='none';
    modalQuiz[numberQuestion - 1].style.display='none';
    modalQuiz[numberQuestion].style.display='flex';
}
else{
    modalStart.style.display='none';
    modalQuiz[numberQuestion - 1].style.display='none';
    modalQuiz[numberQuestion].style.display='flex';
    changeBackgrondContainer();
}
}
function changeBackgrondContainer(){
    container.classList.add('end-game');
}
function startGame(){
    setTimeout(showNextModalQuiz, 500);
    modalStart.style.display='none';
    numberQuestion++


}