(()=> {
  'use strict';
  kintone.events.on(['app.record.create.change.日付','app.record.edit.change.日付'],(event)=>{
  const date = event.record.日付.value;
  dateFns.~~
  
  });
  // Add "create and edit" events on the "サイボウズ製品" process
  kintone.events.on(['app.record.create.change.サイボウズ製品','app.record.edit.change.サイボウズ製品'],(event)=> {
  const product = event.record.サイボウズ製品.value;
  
  // use switch to get the values and display the values on the 重複禁止項目＿文字列 field
  switch(product){
   case 'kintone':
     product='KN';
     event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}';
     break;
   case 'Garoon':
      product='GR';
      event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}';
      break; 
   case 'サイボウズOffice':
      product='OF';
      event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}';
      break;
   case 'Mailwise':
       product='MW';
       event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}';
       break;
  }
  return event;
  
  });
  
  // Add "create and edit" events on the "管理番号" process
  kintone.events.on(['app.record.create.change.管理番号','app.record.edit.change.管理番号'],(event)=>{
  const number = event.record.管理番号.value; // get the value
  event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}'; // display it on 重複禁止項目＿文字列 field
  return event;
  });
  
  // Add "create and edit" events on the "重複禁止項目＿文字列" process
  kintone.events.on(['app.record.create.change.重複禁止項目＿文字列','app.record.edit.change.重複禁止項目＿文字列'],(event)=>{
  console.log(event); // display it on console
  event.record.重複禁止項目＿文字列.disabled =true; // prohibit the duplicate
  event.record.重複禁止項目＿文字列.value = '${YYYYMMDD}-${product}-${number}'; // display that format on 重複禁止項目＿文字列 field
  return event;
  })
  })();


****
// (() => {
//    'use strict';
 
//    const kEvent = ['app.record.create.change.日付', 'app.record.edit.change.日付', 'app.record.create.change.サイボウズ製品', 'app.record.edit.change.サイボウズ製品', 'app.record.create.change.管理番号', 'app.record.edit.change.管理番号'];
 
//    kintone.events.on(kEvent, (event) => {
//      console.log(`event`);
//      console.log(event);
 
//      const dateGet = event.record.日付.value;
//      console.log(`dateGet`);
//      console.log(dateGet);
 
//      const dateId = dateFns.format(dateGet, 'YYYYMMDD');
//      console.log(`dateId`);
//      console.log(dateId);
 
//      // get values from 管理番号
//      const numberManage = event.record.管理番号.value;
//      console.log(`numberManage`);
//      console.log(numberManage);
 
//      // get values from サイボウズ製品
//      const productTitle = event.record.サイボウズ製品.value;
 
//      //const productType =['KN','GR','OF','MW'];
 
//      const productType = [];
//      productType[0] = "KN";
//      productType[1] = "GR";
//      productType[2] = "OF";
//      productType[3] = "MW";
 
//      console.log(`productType`);
//      console.log(productType);
 
//      switch (productTitle) {
//        case 'kintone':
//          event.record.重複禁止項目_文字列.value = `${dateId}-${productType[0]}-${numberManage}`;
//          break;
//        case 'Garoon':
//          event.record.重複禁止項目_文字列.value = `${dateId}-${productType[1]}-${numberManage}`;
//          break;
//        case 'サイボウズOffice':
//          event.record.重複禁止項目_文字列.value = `${dateId}-${productType[2]}-${numberManage}`;
//          break;
//        case 'Mailwise':
//          event.record.重複禁止項目_文字列.value = `${dateId}-${productType[3]}-${numberManage}`;
//          break;
//      }
//      return event;
//    });
//  })();