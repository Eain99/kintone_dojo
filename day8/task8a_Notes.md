# Task8 Notes

## Original task description

* 前回のJSAPI課題①ではAction5の値は決め打ちで設定していた
* アプリの設定から取得した値で設定できるようにしたい = 決め打ちしたくない
* ドロップダウンに設定された値が過不⾜なく、設定順に表⽰されること
* 使⽤するアプリはJSAPIと同じもの
* アプリ再利⽤で動作確認をすること

## Task description

* Use the [Task_08_kintoneAPI課題用アプリ.zip](Task_08_kintoneAPI課題用アプリ.zip) to build a Kintone App
  * Duplicate the App from the Task 06
* Automatically populate the record's sub-table for each Action5 options (6x)
  * i.e., go through the Action5 drop-down, grab the options, and generate a sub-table row for each option
* Do not hard-code the options as the drop-down field's value may change in the future
* Generate the sub-table rows in the order of the drop-down options

Screenshot of the Customization
* ![task_08_goal.png](task_08_goal.png)

## Task steps

1. Duplicate `Action5+1` App (used in Task 06)
1. Set the code trigger to [app.record.create.show](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#onload-event-desktop)
1. Get App ID with [kintone.app.getId()](https://developer.cybozu.io/hc/ja/articles/202166300)
1. Use [Get Form Fields](https://kintone.dev/en/docs/kintone/rest-api/apps/get-form-fields/) REST API to get all fields from the App
    * method "GET" and Endpoint `/k/v1/app/form/fields.json`
1. Scan for `Action5+1` drop-down field (`Action5` field code)
1. Store the "Action5.value" into an array
1. Determine the number of sub-table rows needed by using [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
    * Array.length = number of sub-table rows needed
1. Create sub-table (`Table` field code) rows (n-1)
1. Populate the drop-down field in the sub-table with each of the Action5 options (だし)
1. Save the record?

## References / 参考

* [【公式】タイムカード（2017.4.11～） - Records](https://bozuman.cybozu.com/k/24590/) App's `不足営業日を一括入力`
* [Autofill Data - KDP tutorial](https://kintone.dev/en/tutorials/autofill-data/)
* [Show and Hide Fields Using Check boxes - Kintone Developer Program](https://kintone.dev/en/tutorials/show-hide-or-restrict-fields/show-and-hide-fields-using-checkboxes/)
