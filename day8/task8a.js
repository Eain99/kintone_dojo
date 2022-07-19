(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    console.log(event);
    const params = {
      app: kintone.app.getId(),// reference:https://developer.cybozu.io/hc/ja/articles/202166300
    };

    return kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params).then((resp) => {

      //action5のoptionsを出す
      const action5Options = resp.properties.Table.fields.Action5.options;

      const action5Array = [];
      Object.keys(action5Options).forEach((values) => {
        action5Array[action5Options[values].index] = values
      });
      // Action5Arrayに入っている値をDropDownでcompressしてPushする
      //event.record.Table.value?
      const newArray = [];
      action5Array.forEach((topic) => { // looping process
        const template = { // create variable and put three values in it 
          value: {
            Action5: { type: 'DROP_DOWN', value: topic },
            課題: { type: 'MULTI_LINE_TEXT', value: '' },
            状況: { type: 'CHECK_BOX', value: ['未振り返り'] }
          }
        }
        newArray.push(template) // put the values from template inside newArray
      });
      event.record.Table.value = newArray;
      return event;
    });
   
  });
})();
