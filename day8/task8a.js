(() => {
  'use strict';

  function autoSubTable(event) {
    console.log(event);

    const params = {
      app: kintone.app.getId(),
    };

    return kintone.api(kintone.api.url('/k/v1/app/form/fields.json,true'), 'GET', params);
  }

  kintone.events.on('app.record.create.show', autoSubTable);
})();
