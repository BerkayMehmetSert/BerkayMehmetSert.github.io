---
title: 'console.log alternatives you didn't know
date: '2022-08-14' 
tags: ['console.log', 'javascript',]
draft: false
summary: 'Now, think that you are writing some JS code and it doesn't work correctly. What's the first thing you do? You are console.log it! So I'm going to tell you some alternatives for console.log.'
---

![console.log](/static/images/posts/console-log.jpg)

Now, think that you are writing some JS code and it doesn't work correctly. What's the first thing you do? You are console.log it! So I'm going to tell you some alternatives for console.log.

### Use destructuring

By using the destruction power of javascript objects, you can do this:

```javascript
const { log } = console

log('hi')
log('testing')
```

You can change the `log` function to any other name you want like this:

```javascript
const { log: myLog } = console

myLog('hi')
myLog('testing')
```

### console.group()

Ever wanted to group your logs? This method is perfect for you!

```javascript
console.group('groupName')
console.log('hi')
console.log('testing')
console.groupEnd()

console.group('groupName2')
console.log('hi')
console.log('testing')
console.groupEnd()
```

### console.table()

Useful for printing an array.

```javascript
const arr = [1, 2, 3, 4, 5]
console.table(arr)
```

### console.time() and console.timeEnd()

This method is used to measure time. For example, checking how many seconds it went to complete the x task?

```javascript
console.time('test')
setTimeout(() => {
  console.timeEnd('test')
}, 1000)
```

This will give us the following result:

```javascript
test: 1.000s
```

### console.assert()

This method is used to check if a condition is true. If it's not, it will throw an error.

```javascript
console.assert(/** Condition **/, /** Error message **/);


console.assert(1 === 1, "1 is equal to 1"); // No error
console.assert(0 === [], "0 is equal to []"); // Error in the console
```

### console.count()

Count the number of times a certain thing happens.

```javascript
console.count('counter 1')

for (let i = 0; i < 10; i++) {
  i % 2 == 0 ? console.count('counter 1') : console.count('counter 2')
}
```

### console.trace()

This method `traces` where it was called. I have an HTML file like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script>
      'test'

      console.trace()

      i = 0
    </script>
  </body>
</html>
```

### debugger

You may not hear about the `debugger keyword`. It's a keyword that is used to stop the execution of the code.

```javascript
const buggyCode = () => {
  debugger
  console.log('hi')
}

// ...

buggyCode()

console.log('World')
```

And that's what I know about console.log. I hope you find it useful. If you have any questions, please let me know.
👇

Happy coding!
