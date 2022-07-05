'use strict';

let standardPrice = 3900;
const price = document.getElementById('price');

// secureOptionにチェックを入れた時
document.getElementsByClassName('chk')[0].onclick = () => {

const secureOption = document.getElementsByClassName('chk')[0].checked;
const diskExpansion= document.getElementsByClassName('chk')[1].checked;

if(secureOption && diskExpansion) {
standardPrice = 6150;
  price.innerText = standardPrice;
}else if(secureOption && !diskExpansion){
standardPrice = 5150;
  price.innerText = standardPrice;
}else if(!secureOption && diskExpansion){
standardPrice = 4900;
  price.innerText = standardPrice;
}else if (!secureOption && !diskExpansion){
standardPrice = 3900;
  price.innerText = standardPrice;
}

//diskExpansionにチェックを入れたとき
document.getElementsByClassName('chk')[1].onclick= () => {

  const secureOption1 = document.getElementsByClassName('chk')[0].checked;
  const diskExpansion1 = document.getElementsByClassName('chk')[1].checked;

  if(secureOption1 && diskExpansion1) {
  standardPrice =6150;
    price.innerText = standardPrice;
  } else if (secureOption1 && !diskExpansion1){
  standardPrice= 5150;
    price.innerText = standardPrice;
  }else if(!secureOption1 && diskExpansion1){
  standardPrice= 4900;
    price.innerText = standardPrice;
  }else if (!secureOption1 && !diskExpansion1){
  standardPrice= 3900;
    price.innerText = standardPrice;
  }
} // end of disExpansion process
}// end of secureOption process

// const standardPrice = 3900;
// const secureOption = 1250;
// const diskExpansion = 3000;
// const price = document.getElementById('price');

