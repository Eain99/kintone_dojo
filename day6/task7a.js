(()=> {
'use strict';
kintone.events.on(['app.record.create.change.日付','app.record.create.change.サイボウズ製品','app.record.create.change.管理番号'],

 (event) =>{
console.log(event);

//日付を出す
const date = event.record.日付.value;
// const today= ;
return dateFns.format
console.log(date);

//製品を出す

const product = event.record.サイボウズ製品.value;
// //const product= {"kintone":"KN","Garoon":"GR","サイボウズOffice":"OF","Mailwise":"MW"};
// console.log(product);

//管理番号を出す
const number = event.record.管理番号.value;
// console.log(number);

});


});