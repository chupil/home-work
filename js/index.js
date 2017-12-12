const aNum = Number(prompt('Впиши цифрове значення \"a\"'));
document.write('Число А' +'='+ aNum);
document.write('<br>');
const bNum = Number(prompt('Впиши цифрове значення \"b\"'));
document.write('Число B' +'='+ bNum);
document.write('<br>');
const cNum = Number(prompt('Впиши цифрове значення \"c\"'));
document.write('Число C' +'='+ cNum);
document.write('<br>');
var disc = bNum * bNum - 4 * aNum * cNum;
document.write('Дискримінант' +'='+ disc);
document.write('<br>');

  if (disc < 0) {  
      var noRes ="без рішення";    
    } else if (disc === 0) {
         var x = (-bNum) / (2 * aNum);    
    } else if (disc > 0){
    var x1 = (-bNum + Math.sqrt(disc)) / (2 * aNum);
    var x2 = (-bNum - Math.sqrt(disc)) / (2 * aNum);
   }
document.write('Не має дійсних коренів' +'='+ noRes);
document.write('<br>');
document.write('Єдиний корінь ' +'='+ x);
document.write('<br>');
document.write('Корінь x1 ' +'= '+ x1 + '<br>'+ 'Корінь x2' +'= '+ x2);
