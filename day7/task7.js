(() => {
  'use strict';

  const kEvent = ['app.record.create.change.日付', 'app.record.edit.change.日付', 'app.record.create.change.サイボウズ製品', 'app.record.edit.change.サイボウズ製品', 'app.record.create.change.管理番号', 'app.record.edit.change.管理番号'];

  kintone.events.on(kEvent, (event) => {
    const dateGet = event.record.日付.value;
    const dateId = dateFns.format(dateGet, 'YYYYMMDD');
    // get values from 管理番号
    const numberManage = event.record.管理番号.value;
    // get values from サイボウズ製品
    const productTitle = event.record.サイボウズ製品.value;

    const productType = ['KN', 'GR', 'OF', 'MW'];
    let ind;
    switch (productTitle) {
      case 'kintone':
        ind = 0;
        break;
      case 'Garoon':
        ind = 1;
        break;
      case 'サイボウズOffice':
        ind = 2;
        break;
      case 'Mailwise':
        ind = 3;
        break;
    }
    event.record.重複禁止項目_文字列.value = `${dateId}-${productType[ind]}-${numberManage}`;
    return event;
  });

  kintone.events.on(['app.record.create.show', 'app.record.edit.show'], ((event) => {
    event.record.重複禁止項目_文字列.disabled = true;
    return event;
  }));
})();
