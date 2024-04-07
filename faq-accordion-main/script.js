const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const ans = document.querySelectorAll('.ans');
const question = document.querySelectorAll('.question');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function(){
    plus[i].classList.toggle('hidden');
    minus[i].classList.toggle('hidden');
    ans[i].classList.toggle('hidden');
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function(){
    plus[i].classList.toggle('hidden');
    minus[i].classList.toggle('hidden');
    ans[i].classList.toggle('hidden');
  });
}

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function(){
    plus[i].classList.toggle('hidden');
    minus[i].classList.toggle('hidden');
    ans[i].classList.toggle('hidden');
  });
}