var numHolder = 0;
var finished = false;
var addOp = 0;

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


function numberWithoutCommas(x)
{
  return x.split(",").join("");
}

function number(num)
{
  var answerRef = document.getElementById('calc-answer');
  if(finished)
  {
    answerRef.textContent = 0;
    finished = false;
  }
  if(addOp == 1)
  {
    numHolder = parseFloat(numberWithoutCommas(answerRef.textContent));
    document.getElementById('add').className = "color3";
    answerRef.textContent = 0;
    addOp = 2;
  }
  if((answerRef.textContent % 1 == 0 && answerRef.textContent.length < 12) || (answerRef.textContent % 1 != 0 && answerRef.textContent.length < 13))
  {
    if(answerRef.textContent == "0")
    {
      answerRef.textContent = num;
    }
    else {
      answerRef.textContent = numberWithoutCommas(answerRef.textContent) + num;
    }
    answerRef.textContent = numberWithCommas(answerRef.textContent);
  }
}

function decimal()
{
  var answerRef = document.getElementById('calc-answer');
  if(finished)
  {
    answerRef.textContent = 0;
    finished = false;
  }
  if(!answerRef.textContent.includes("."))
  {
    if(answerRef.textContent == "0")
    {
      answerRef.textContent = "0.";
    }
    else {
      answerRef.textContent += ".";
    }
  }
}

function reset()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = 0;
  addOp = false;
  finished = false;
  document.getElementById('add').className = "color3";
}

function negative()
{
  var answerRef = document.getElementById('calc-answer');
  answerRef.textContent = numberWithoutCommas(answerRef.textContent) * -1;
  answerRef.textContent = numberWithCommas(answerRef.textContent);
}

function percent()
{
  var answerRef = document.getElementById('calc-answer');
  var temp = numberWithoutCommas(answerRef.textContent);
  answerRef.textContent = numberWithoutCommas(answerRef.textContent) / 100;
  if(answerRef.textContent.length > 12)
  {
    answerRef.textContent = temp;
  }
  answerRef.textContent = numberWithCommas(answerRef.textContent);
}

function addAction()
{
  var answerRef = document.getElementById('calc-answer');
  numHolder += parseFloat(numberWithoutCommas(answerRef.textContent));
  addOp = 1;
  document.getElementById('add').className = "selected";
}

function equals()
{
  var answerRef = document.getElementById('calc-answer');
  if(addOp == 1)
  {
    answerRef.textContent = numberWithoutCommas(answerRef.textContent) * 2;
    answerRef.textContent = numberWithCommas(answerRef.textContent);
    addOp = 0;
    document.getElementById('add').className = "color3";
  }
  if(addOp == 2)
  {
    answerRef.textContent = parseFloat(numHolder) + parseFloat(numberWithoutCommas(answerRef.textContent));
    answerRef.textContent = numberWithCommas(answerRef.textContent);
    addOp = 0;
    document.getElementById('add').className = "color3";
  }
  finished = true;
  numHolder = 0;
}

/*
- make operators work
*/
