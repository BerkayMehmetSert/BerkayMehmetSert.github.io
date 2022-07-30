---
title: 'Screen Sizes Cheat Sheets'
date: '2022-07-30'
tags: ['screen', 'size', 'cheatsheet']
draft: false
summary: 'The Screen Sizes Cheat Sheet is a collection of screen size related information that can be used to help you design your website for different screen sizes. It is a good starting point for your website design.'
---

![accessibility](/static/images/posts/screen-size.jpg)

## Size classifications

### `Extra small(320px)`

**(240px) 320px – 400px**

- Media query: none—above the media queries
- Font-size: `100%` (16px)
- Line-height: `1.3` (130%)
- Bottom margins: 1.3rem (`<h1>`, `<p>`, `<ul>`, etc.)

```css
html {
  font: normal 100%/1.3 sans-serif;
}
/*
  Add to anything that needs a bottom margin, for nice, cohesive vertical rhythm
*/
h1,
p {
  margin: 0 0 1.3rem;
}
```

### `Small(400px)`

**400px – 608px**

- Media query: 25em
- Font-size: `100%` (16px)
- Line-height: `1.3` (130%)
- Bottom margins: `1.3rem`

```css
@media only screen and (min-width: 25em) {
  html {
    font-size: 100%;
    line-height: 1.3;
  }
  h1,
  p {
    margin: 0 0 1.3rem;
  }
}
```

### `Medium(608px)`

**608px – 960px**

- Media query: `38em`
- Font-size: `110%` (17px)
- Line-height: `1.4` (140%)
- Bottom margins: `1.4rem`

```css
@media only screen and (min-width: 38em) {
  html {
    font-size: 110%;
    line-height: 1.4;
  }
  h1,
  p {
    margin: 0 0 1.4rem;
  }
}
```

### `Large(960px)`

**960px – 1440px**

- Media query: `60em`
- Font-size: `120%` (19px)
- Line-height: `1.5` (150%)
- Bottom margins: `1.5rem`

```css
@media only screen and (min-width: 60em) {
  html {
    font-size: 120%;
    line-height: 1.5;
  }
  h1,
  p {
    margin: 0 0 1.5rem;
  }
}
```

### `Extra large(1440px)`

**1440px+**

- Media query: `90em`
- Font-size: `130%` (20px)
- Line-height: `1.5` (150%)

```css
@media only screen and (min-width: 90em) {
  html {
    font-size: 130%;
  }
}
```

And that's what I know about screen sizes. I hope you find it useful. If you have any questions, please let me know.
👇

Happy coding!
