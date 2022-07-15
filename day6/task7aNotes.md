# Task 7 Steps

- [Task 7 Steps](#task-7-steps)
  - [Create variable for events](#create-variable-for-events)
  - [Create event](#create-event)
  - [Get the values from 日付 using date-fns library](#get-the-values-from-日付-using-date-fns-library)
  - [Get the values from 管理番号](#get-the-values-from-管理番号)
  - [Get the values from サイボウズ製品 using Array and Switch statement](#get-the-values-from-サイボウズ製品-using-array-and-switch-statement)
  - [prohibit from saving the record if the "ID" has a duplicate](#prohibit-from-saving-the-record-if-the-id-has-a-duplicate)
  - [Additional Notes](#additional-notes)

## Create variable for events

- keyword - (const)constant .
- Create an Array, `kEvent`, to hold all Kintone Events related to the following fields: `日付`, `サイボウズ製品`, `管理番号`

## Create event

- create event with variable(kEvent);
- check the process is going well with console.log

## Get the values from 日付 using date-fns library

- declare a variable(dateGet) to get value from 日付
- check the dateGet with console.log
- get the date from date-fns library with the format ("YYYYMMDD");

## Get the values from 管理番号

- declare a variable (numberManage) and get values from 管理番号

## Get the values from サイボウズ製品 using Array and Switch statement

- declare a variable(productTitle) to get values from サイボウズ製品
- create array(productType) for the values
- use switch statement to get the values from productTitle

## prohibit from saving the record if the "ID" has a duplicate

## Additional Notes

- Constantly format your code ~
- panda
