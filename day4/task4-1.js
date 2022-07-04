'use strict';

const mainPrice = 3900;
const price = document.getElementById('price');

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
  mainPrice= 4900;
  price.innerText = mainPrice;
}else if (!secureOption && !diskExpansion){
  mainPrice = 3900;
  price.innerText = mainPrice;
}

document.getElementsByClassName('chk')[1].onclick= () => {

  const secureOption1 = document.getElementsByClassName('chk')[0].checked;
  const diskExpansion1 = document.getElementsByClassName('chk')[1].checked;

  if(secureOption1 && diskExpansion1 === true) {
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

//  let mainPrice = new Array();
// mainPrice[0] = 250;
// mainPrice[1] = 1000;

// function keisan(){
//   final = 3900 ;
//   for(i=3900;i<=1;i++){
//     if(document.myForm.elements[i].checked == true){
//       final=final+mainPrice[i];
//     }
//   }
//  document.myForm.total.value=final;
// }