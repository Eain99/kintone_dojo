(() => {
  'use strict';

  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
   

    const recordValue = event.record.重複禁止項目.value;
    const query = '重複禁止項目 = "' + recordValue + '"';

    const params = {
      'app': kintone.app.getId(),
      'query': query
    }

    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
      console.log(resp.records);
      if (resp.records.length === 0) {// If it is not duplicating, event will be returned
        // console.log(event);
        return event;

      } else {
        if (window.confirm('レコードが重複しています。そのままで保存しますか。')) {
          return event;
        } else {
          event.error = "キャンセルしました"
          return event;
        }
      }


    });
  });





})();