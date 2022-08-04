'use strict';
let standardPrice = 3900;
const price = document.getElementById('price');
const checkbox = document.getElementsByClassName('chk');
console.log(checkbox);

// secureOptionにチェックを入れた時
checkbox[0].onclick = () => {

// const secureOption = document.getElementsByClassName('chk')[0].checked;
// const diskExpansion= document.getElementsByClassName('chk')[1].checked;

if(checkbox[0].checked){
  price.innerText=standardPrice+Number(checkbox[0].value*5);
}

}
//diskExpansionにチェックを入れたとき
checkbox[1].onclick= () => {

if(checkbox[1].checked){
  price.innerText=standardPrice+Number(checkbox[1].value);
}
 
} // end of disExpansion process
// end of secureOption process

// const standardPrice = 3900;
// const secureOption = 1250;
// const diskExpansion = 3000;
// const price = document.getElementById('price');

