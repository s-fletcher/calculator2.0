// var calcBody = document.getElementById('calc-body');
// if(window.innerWidth < 1600)
// {
//   calcBody.style.width = "400px";
//   calcBody.style.height = "560px";
//   calcBody.style.marginLeft = ((window.innerWidth*.5)-(200))+"px";
// }
// else if(window.innerWidth > 2000)
// {
//   calcBody.style.width = "500px";
//   calcBody.style.height = "700px";
//   calcBody.style.marginLeft = ((window.innerWidth*.5)-(250))+"px";
// }
// else {
//   calcBody.style.width = (window.innerWidth*.25)+"px";
//   calcBody.style.height = (calcBody.clientWidth*1.4)+"px";
//   calcBody.style.marginLeft = ((window.innerWidth*.5)-(calcBody.clientWidth))+"px";
// }
//
// window.addEventListener('resize', function () {
//   if(window.innerWidth < 1600)
//   {
//     calcBody.style.marginLeft = ((window.innerWidth*.5)-(200))+"px";
//   }
//   else if(window.innerWidth > 2000)
//   {
//     calcBody.style.marginLeft = ((window.innerWidth*.5)-(250))+"px";
//   }
//   else
//   {
//     calcBody.style.width = (window.innerWidth*.25)+"px";
//     calcBody.style.height = (calcBody.clientWidth*1.4)+"px";
//     calcBody.style.marginLeft = ((window.innerWidth*.5)-(calcBody.clientWidth))+"px";
//   }
// });

// NOTE: COMPUTING BEGINS

function zero()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 0;
  }
  else {
    answerRef.textContent += 0;
  }
}
function one()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 1;
  }
  else {
    answerRef.textContent += 1;
  }
}
function two()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 2;
  }
  else {
    answerRef.textContent += 2;
  }
}
function three()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 3;
  }
  else {
    answerRef.textContent += 3;
  }
}
function four()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 4;
  }
  else {
    answerRef.textContent += 4;
  }
}
function five()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 5;
  }
  else {
    answerRef.textContent += 5;
  }
}
function six()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 6;
  }
  else {
    answerRef.textContent += 6;
  }
}
function seven()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 7;
  }
  else {
    answerRef.textContent += 7;
  }
}
function eight()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 8;
  }
  else {
    answerRef.textContent += 8;
  }
}
function nine()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = 9;
  }
  else {
    answerRef.textContent += 9;
  }
}
function decimal()
{
  var answerRef = document.getElementById('calc-answer');
  if(answerRef.textContent == 0)
  {
    answerRef.textContent = ".";
  }
  else {
    answerRef.textContent += ".";
  }
}
function reset()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = 0;
}

/*
- Fix decimal
- make operators work
- make +/- work
- add commas to number
*/
