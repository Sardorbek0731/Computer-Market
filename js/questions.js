const itemQuestions = document.getElementsByClassName("item_question");
const questionDown = document.getElementsByClassName("question_down");
function angleDown(index) {
  itemQuestions[index].classList.toggle("click_angle_down");
  questionDown[index].classList.toggle("up");
}
