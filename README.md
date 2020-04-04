# Alert

Customizable alert with Zero dependencies.

Demo
-----
[Example](https://whoami-shubham.github.io/Alert/Example/)

Usage
-----
```html
<script src="alert.js"></script>
<link rel="stylesheet" href="alert.css">
```
Examples
--------

The most basic message:

```js
Alert({message:'Hello World !'})

```

A message with title:

```js

Alert({title:'Alert1',message:'Hello There !, I am using Alert.'});

```
Chaining Multiple Alerts:

```js

function onOk(title, msg) { // callback function have to return Alert
          return () => {
                return Alert({ title: title, message: msg })
      }
 }
Alert({ title: 'Alert2', message: 'You Can Chain multiple Alerts.', callBacks: [onOk('First pop up !'), onOk('2nd pop up !'), onOk('3rd pop up !')] });

```
