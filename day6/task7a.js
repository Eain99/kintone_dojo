(()=> {
'use strict';
kintone.events.on('app.record.create.change.日付,app.record.create.change.サイボウズ製品,app.record.create.change.管理番号',

 (event) =>{
console.log(event);

const date = event.record.日付.value;
//const today= new Date();


const product = event.record.サイボウズ製品.value;
console.log(product);


const number = event.record.管理番号.value;
console.log(number);

});


});