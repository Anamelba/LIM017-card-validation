const validator = {
//*+***************************************IS_VALID**************************************
  isValid: function(num){
  let nCheck = 0, bEven = false;
  for(var n = num.length-1; n >= 0; n--){

    var cDigit = num.charAt(n),
    nDigit = parseInt(cDigit, 10);
    if (bEven && (nDigit *= 2) > 9)nDigit -= 9;
    nCheck +=  nDigit;
    bEven = !bEven;
  }
  return ((nCheck % 10) == 0);
  },
//*+******************************************MASKIFY**************************************
  maskify: function (num)
{
  let hideNum = [];
  for(let i = 0; i < num.length; i++)
  {
    if(i < num.length-4)
    {
      hideNum.push("#");
    }
    else
    {
      hideNum.push(num[i]);
    }
  }
  let hideNum1 = hideNum.join("");
  //let hideNum2 = hideNum1.replace(/([#-9]{4})/g, '$1 '); //Agrupa de 4 en 4
  return hideNum1;
}
};

export default validator;
