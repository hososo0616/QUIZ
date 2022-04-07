const answerList = document.querySelectorAll(".select");

answerList.forEach(li => li.addEventListener("click", checkCiikedAnswer));

//正解
const correctAnswers = {
  question1: "C",
  question2: "D",
  question3: "A",
  question4: "B"
}

function checkCiikedAnswer(event) {

  const clickElemnt = event.currentTarget;

  const questionId = clickElemnt.closest("ol.answers").dataset.id;

  console.log(questionId);

  const selctedanswer = clickElemnt.dataset.answer;
  const correctanswer = correctAnswers[questionId];

  console.log(correctanswer);

  let message;
  let answercolor;

  //答えの判定
  if (selctedanswer === correctanswer) {
    message = "正解です。やったね";
    answercolor = "yellow";
  }
  else{
    //不正解
    message = "残念です。不正解";
    answercolor = "#f05959";
  }

  alert(message);

  //色の変更
  document.getElementById("correct-answer").style.color = answercolor;

  //答えの表示
  document.querySelector(".section-answer").style.display = "block";

}