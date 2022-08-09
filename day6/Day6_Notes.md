# Day6 Notes

{Original -> Eain's Version } Understanding the task 

->

Breakdown the problem into steps


## Eain's steps

1. Understand WHAT is being asked of you -> Notes
1. Break down the task into steps
1. Look up [date-fns - modern JavaScript date utility library](https://date-fns.org/)
1. Look for example tutorials / projects per step
1. Build a test per step
1. Compile the builds into a Kintone JS Customization

## Task steps

1. Create Kintone App from [kintoneAPITask2Template.zip](kintoneAPITask2Template.zip)
    * App URL:
1. Kintone JS Customization Template
1. Determine WHEN to run WHICH code
    * Kintone Events for running the Customization
    * Kintone events to prevent users from editing the field manually
1. Extract data from the following 3 fields
    * Date field
    * Drop-down field -> Product
    * Number field -> Management Number
1. Merge the data into a string
1. Format the string as `YYYYMMDD-〇〇-✕✕`
1. Insert the string into the "ID" field
    * Insert ASAP to show the user what it would look like
1. Check if the "ID" string has a duplicate
1. Prevent users from saving the record if the "ID" has a duplicate
1. Prevent users from inserting their own string in the "ID" field

## Task Details
* Prohibit text fields with duplicate character strings
  * Character string will be the combo of 3 fields
    * Date field
    * Drop-down field -> Product
    * Number field -> Management Number
  * ⚡ For Calculated field, duplicate values cannot be prohibited using build-in settings

* Auto-update the _Calculated field_ string when the input fields are changed

* String format: `YYYYMMDD-oo-xx`
  * 00 = Abbreviation for the product
    * Kintone : KN
    * Garoon : GR
    * Cybozu Office : OF
    * Mailwise : MW
  * xx = Management Number

* Insert the character string when creating & editing the record
  * Ignore list-view editing situation
* Prevent users from inserting their own character string in the field
* Use `date-fns` library for date manipulation


## Original Task Description - Customer's Request

* 目的
  * kintoneのイベントを理解する
  * kintone JavaScript APIを理解する
* やること
  * kintoneカスタマイズを実施する
* 添付されているアプリテンプレートを使用すること
* 提出物
  * JavaScriptファイル

* 文字結合したフィールドを重複禁止設定したい
  * 日付/ドロップダウン/数値 の3フィールドの組み合わせで重複禁止の設定をしたい
  * 標準機能では自動計算には重複禁止は設定できない
* 自動計算フィールドと同様に、各フィールドが変更されたときに 文字列フィールドに値が挿入されるようにする
  * フォーマットは「YYYYMMDD-〇〇-✕✕」
* 〇〇:製品の略称
  * kintone : KN
  * Garoon : GR
  * サイボウズ Office : OF
  * Mailwise : MW

* 文字列に挿入するタイミングはレコード新規作成時とレコード編集時
  * 一覧画面のインライン編集は今回除く(処理が複雑になるため)
* 挿入先の文字列フィールドは常に編集不可にしておきたい
  * 一覧画面のインライン編集は今回除く
* 日付操作にはdate-fnsライブラリを利用する
