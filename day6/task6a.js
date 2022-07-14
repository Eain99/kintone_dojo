(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    console.log(event);

    const newArray = [];// create new array for Table.value

    const action5 = ['あくなき探求', // create array for Action5 values
      '不屈の心体',
      '理想への共感',
      '心を動かす',
      '知識を増やす',
      '公明正大'
    ];
    action5.forEach((topic) => { // looping process
      const template = { // create variable and put three values in it 
        value: {
          Action5: { type: 'DROP_DOWN', value: topic },
          課題: { type: 'MULTI_LINE_TEXT', value: '' },
          状況: { type: 'CHECK_BOX', value: ['未振り返り'] }
        }
      }
      newArray.push(template) // put the values from template inside newArray
    });
    event.record.Table.value = newArray; // get values from newArray

    return event;

  });
})();