(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {

    console.log(event);

    const params = {
      app: kintone.app.getId(),
    };
    kintone.api(kintone.api.url('/k/v1/app/form/fields.json,true'), 'GET', params) 

  });


})();