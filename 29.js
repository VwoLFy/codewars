function basicOp(operation, value1, value2)
{
    var res = 0;
  switch (operation) {
    case "*":
        res = value1 * value2;
        break;  
    case "/":
        res = value1 / value2;
        break;
    case "+":
        res = value1 + value2;
        break;
    case "-":
        res = value1 - value2;
        break;
  }
  return res;
}