var max = 1000;
var num = 1;
var count = 0;

while(num < max){
  num = num * 3;
  count = count + 1;
}

alert('3を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');