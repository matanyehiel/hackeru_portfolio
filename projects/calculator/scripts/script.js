function pushButton(buttonValue)
{
     if (buttonValue == "AC")
     {
          document.getElementById('displayNum').innerHTML = '';
     }
     else
     {
          document.getElementById('displayNum').innerHTML += buttonValue;
     }
}
function calculate(equation)
{
     var answer = eval(equation);
     document.getElementById('displayNum').innerHTML = answer;
}