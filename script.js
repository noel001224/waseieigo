var qa = [
  ['ベビーカー', 1],
  ['ランニングマシーン', 1],
  ['オープンカー', 1],
  ['シャーペン', 1],
  ['メイク', 1],
  ['ハイカラ', 1],
  ['ラムネ', 1],
  ['カレーライス', 1],
  ['コンビニ', 1],
  ['オーブントースター', 1]
];

var count = 0;
var correctNum = 0;

window.onload = function() {
  // 最初の問題を表示
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
};

// クリック時の答え判定
function hantei(btnNo) {
  if (qa[count][1] == btnNo) {
    correctNum++;
  }

  if (count == 9) {
    alert('あなたの正解数は' + correctNum + '問です！');
  }

  // 次の問題表示
  count++;
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + qa[count][0];
}