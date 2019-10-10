 module.exports = function zeros(expression) {
  // your solution
  let exp = [];
  let fivefold = 5;
  let decimal = 10;
  let zero = 0;
  let five = 0;

  exp = expression.split('*');

  for (let i=0; i<exp.length; i++) {
    if (exp[i][exp[i].length-2] == "!") {

      exp[i] = parseInt(exp[i]);

      if( !(exp[i]%2) )  {
        while(exp[i]/decimal >= 1) {
          zero += parseInt(exp[i] / decimal);
          decimal *= decimal;
        }

        if(exp[i] >= 50) {
          zero += 1;
        }

        decimal = 10;

      } else if (exp.find(item => !(parseInt(item)%2) == true)) {

        while(exp[i]/fivefold >= 1) {
          let divider = fivefold;
          let delta = 0;

          while(exp[i]/divider >= 1) {
            five++;
            divider = fivefold*(3+delta)
            delta = delta + 2;
          }
          fivefold *= fivefold;
        }
        fivefold = 5;
      }

      } else {
        exp[i] = parseInt(exp[i]);
        while(exp[i]/fivefold >= 1) {
        zero += parseInt(exp[i] / fivefold);
        fivefold *= fivefold;
      }
      fivefold=5;
    }
  }

  zero = zero + five;
  return zero;
}

