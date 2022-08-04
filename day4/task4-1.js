'use strict';
let standardPrice = 3900;
const price = document.getElementById('price');
const checkbox = document.getElementsByClassName('chk');

// secureOptionにチェックを入れた時
checkbox[0].onclick = () => {
  if (checkbox[0].checked) {
    standardPrice += Number(checkbox[0].value) * 5;
  }
  else {
    standardPrice -= Number(checkbox[0].value) * 5;
  }
  price.textContent = standardPrice;
}
//diskExpansionにチェックを入れたとき
checkbox[1].onclick = () => {
  if (checkbox[1].checked) {
    standardPrice += Number(checkbox[1].value);
  }
  else {
    standardPrice -= Number(checkbox[1].value);
  }
  price.textContent = standardPrice;
}

