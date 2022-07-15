# Task8 Notes

## Original task description

* 前回のJSAPI課題①ではAction5の値は決め打ちで設定していた
* アプリの設定から取得した値で設定できるようにしたい = 決め打ちしたくない
* ドロップダウンに設定された値が過不⾜なく、設定順に表⽰されること
* 使⽤するアプリはJSAPIと同じもの
* アプリ再利⽤で動作確認をすること

## Task steps

* Reuse the app which was used in task6
* Last time, Action5 values were decided automatically but this time, we want to be able to set with the value obtained from the application settings
* The values set in the dropdown should be displayed in the correct order.

## Task in details

* Create Action5+1(2) app
* Create event (create.show) 
* As we want to get data from field,we will use the method "GET" and URL "/k/v1/app/form/fields.json"
* Declare request parameter(params) with app id with kintone.app.getId(). reference : [アプリID取得-cybozu developer network](https://developer.cybozu.io/hc/ja/articles/202166300-%E3%82%A2%E3%83%97%E3%83%AAID%E5%8F%96%E5%BE%97)
