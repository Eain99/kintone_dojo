(() => {
  'use strict';
kintone.events.on('app.record.create.show',(event)=>{
console.log(event);
 const params = {
 app:kintone.app.getId(),// reference:https://developer.cybozu.io/hc/ja/articles/202166300
 };

 return kintone.api(kintone.api.url('/k/v1/app/form/fields.json',true),'GET',params).then((resp) =>{

 const action5Options=resp.properties.Table.fields.Action5.options;

 const action5Array = [];
 Object.keys(action5Options).forEach((values)=>{
    action5Array[action5Options[values.index]] = values
    console.log(values);
 });

 const tableValues = event.record.Table.value;

 });
});
})();
