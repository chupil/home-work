const aNum = Number(prompt('Впиши цифрове значення \"a\"'));
const bNum = Number(prompt('Впиши цифрове значення \"b\"'));
const cNum = Number(prompt('Впиши цифрове значення \"c\"'));
var disc = bNum * bNum - 4 * aNum * cNum;

  if (disc < 0) {  
      alert(disc);    
    } else if (disc == 0) {
         var x = (-bNum) / (2 * aNum);
         alert(x);
    } else if (disc > 0){
    var x1 = (-bNum + Math.sqrt(disc)) / (2 * aNum);
    var x2 = (-bNum - Math.sqrt(disc)) / (2 * aNum);
    alert(disc);
    alert(x1);
    alert(x2);
   }
