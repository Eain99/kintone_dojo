(()=> {
'use strict';
kintone.events.on('app.record.create.show', (event) => {
  console.log(event);
  let table = event.record.Table;

  table.value =[];
  const action5 = ['あくなき探求',
            '不屈の身体',
             '理想への共感',
             '心を動かす',
             '知識を増やす',
             '公明正大'
           ];

           action5.forEach((topic) => {
             table.value.push({
               value :{
                 Action5: {type:'DROP_DOWN',value:topic},
                 状況:{type:'CHECK_BOX',value:['未振り返り']},
                 課題:{type:'MULTI_LINE_TEXT',value:undefined}
               }
             });
           });
           return event;
});


})();