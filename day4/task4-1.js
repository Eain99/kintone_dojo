'use strict';

let mainPrice = 3900;
const price = document.getElementById('price');

// secureOptionにチェックを入れた時
document.getElementsByClassName('chk')[0].onclick = () => {

const secureOption = document.getElementsByClassName('chk')[0].checked;
const diskExpansion= document.getElementsByClassName('chk')[1].checked;

if(secureOption && diskExpansion) {
  mainPrice = 6150;
  price.innerText = mainPrice;
}else if(secureOption && !diskExpansion){
  mainPrice = 5150;
  price.innerText = mainPrice;
}else if(!secureOption && diskExpansion){
  mainPrice = 4900;
  price.innerText = mainPrice;
}else if (!secureOption && !diskExpansion){
  mainPrice = 3900;
  price.innerText = mainPrice;
}

//diskExpansionにチェックを入れたとき
document.getElementsByClassName('chk')[1].onclick= () => {

  const secureOption1 = document.getElementsByClassName('chk')[0].checked;
  const diskExpansion1 = document.getElementsByClassName('chk')[1].checked;

  if(secureOption1 && diskExpansion1) {
    mainPrice =6150;
    price.innerText = mainPrice;
  } else if (secureOption1 && !diskExpansion1){
    mainPrice= 5150;
    price.innerText = mainPrice;
  }else if(!secureOption1 && diskExpansion1){
    mainPrice= 4900;
    price.innerText = mainPrice;
  }else if (!secureOption1 && !diskExpansion1){
    mainPrice= 3900;
    price.innerText = mainPrice;
  }
}
}

// const standardPrice = 3900;
// const secureOption = 1250;
// const diskExpansion = 3000;
// const price = document.getElementById('price');

