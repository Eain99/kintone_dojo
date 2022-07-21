(() => {

 'use strict';
 kintone.events.on('app.record.create.show',function(event){

  //行の作成
 const newRow1 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);
 const newRow2 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);
 const newRow3 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);
 const newRow4 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);
 const newRow5 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);
 const newRow6 = createValue_(['Action5'],' ',['み振り返り','○','▲','✖️']);

 //Tableに初期値を設定する
//  event.record.Table.value =[
//    newRow1,
//    newRow2,
//    newRow3,
//    newRow4,
//    newRow5,
//    newRow6
//  ];
//  return event;
//  });

//  function createValue_(){ //（）の何に何を入れる？ (eg  [Action5],'',['み振り返り','○','▲','✖️'])
//    return {
//      'value':{

//        'Action5':{
//          'type':'DROP_DOWN',
//          'value':[
//            'あくなき探求',
//            '不屈の身体',
//            '理想への共感',
//            '心を動かす',
//            '知識を増やす',
//            '公明正大'
//          ]
//        }
//        '課題':{
//          'type':'MULTI_LINE_TEXT',
//          'value': undefined
//        }
//        '状況': {
//         'type' : 'CHECK_BOX',
//         'value': [
//           'み振り返り',
//           '○',
//           '▲',
//           '✖️'
//         ]
//        }
      
//      }
//    };
}

 })();