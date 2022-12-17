const itemQuestions = document.getElementsByClassName("item_question");
const answerDowns = document.getElementsByClassName("fa-angle-down");
function angleDown(index) {
  itemQuestions[index].classList.toggle("click_angle_down");
  answerDowns[index].classList.toggle("fa-angle-up");
}
