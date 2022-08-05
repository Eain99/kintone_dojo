(() => {
  'use strict';

  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
    const recordValue = event.record.重複禁止項目.value;
    const recordId = kintone.app.record.getId();
    let query = '重複禁止項目 = "' + recordValue + '"';

    if (recordId) {
      query = '重複禁止項目 = "' + recordValue + '" and レコード番号 != "' + recordId + '"';
    }
    
    const params = {
      'app': kintone.app.getId(),
      'query': query
    }
    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
      if (resp.records.length === 0) {// If it is not duplicating, event will be returned
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