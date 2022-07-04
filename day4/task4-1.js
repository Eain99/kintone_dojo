'use strict';
// Monthly cost is 3900 yen
// if we check secure option and desk増設, it will be 5150


// amount = new Array();
// amount[0]= 250;
// amount[1]= 1000;

// function calculation(){
// goukei=3900;

// for(i=0;i<=1;i++){
// if(document.chk.elements[i].checked == true){
//   goukei = goukei + amount[i];
// }
//   }
//   document.chk.total.value=goukei;
// }


window.addEventListener('DOMContentLoaded',function(){
  const amount=document.getElementsByClassName('chk');
  const price=document.getElementById('price');
  chk.addEventListener('change',checkboxStatus,false);


  function checkboxStatus(){
    if(this.checked){
      price.textContent=this.value;
    }else{
      sampleOutput.textContent="";
    }
  }
})