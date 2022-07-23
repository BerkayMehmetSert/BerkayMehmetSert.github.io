---
title: 'Aspect ratio code snippets'
date: '2022-07-24'
tags: ['css3', 'snippets', 'aspect-ratio']
draft: false
summary: 'The CSS property aspect-ratio lets you create boxes that maintain proportional dimensions where the height and width of a box are calculated automatically as a ratio. It’s a little math-y, but the idea is that you can divide one value by another on this property and the calculated value ensures a box stays in that proportion.'
---

# Aspect ratio code snippets

![aspect-ratio](/static/images/posts/aspect-ratio.jpg)

`aspect-ratio` is a custom property that can be used to define the aspect ratio of an element. It can be used on any element, but it’s most commonly used on images. It’s a CSS custom property that takes a ratio of two numbers, separated by a slash. The first number is the width, the second is the height. The ratio is calculated as the width divided by the height.

Creates a responsive container with a specified aspect ratio.

- Use a CSS custom property, `--aspect-ratio` to define the desired aspect ratio.
- Set the container element to `position: relative` and `height: 0`, calculating its height using the `calc()` function and the `--aspect-ratio` custom property.
- Set the direct child of the container element to `position: absolute` and filling it parent, while giving it `object-fit: cover` to maintain the aspect ratio.

```html
<div class="container">
  <img src="https://picsum.photos/id/119/800/450" />
</div>
```

```css
.container {
  --aspect-ratio: 16/9;
  position: relative;
  height: 0;
  padding-bottom: calc(100% / (var(--aspect-ratio)));
}
.container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
And that's what I know about aspect-ratio properties. I hope you find it useful. If you have any questions, please let me know. 
👇

Happy coding!
