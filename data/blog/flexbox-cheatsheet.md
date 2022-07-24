---
title: 'Flexbox cheat sheet'
date: '2022-07-25'
tags: ['flexbox', 'css', 'cheatsheet']
draft: false
summary: 'The flexbox is a layout system that allows you to display elements in a way that allows them to flow freely and take up as much space as possible. It is a way to lay out elements in a way that allows them to flow freely and take up as much space as possible.'
---

![flexbox](/static/images/posts/flexbox.jpg)

CSS Flexbox is a layout model that allows an efficient and dynamic arrangement of elements. This layout is one-dimensional and permits the placement of elements inside a container with equally distributed space.

This layout makes elements responsive which means that the elements change their behavior according to the kind of device displaying them. It makes elements flexible and provides them with appropriate position, and symmetry.

## Enabling

### `display: flex`

Turns a parent element into a flex container-all child elements will become part of the flex flow.

Forces the parent element into a `display: block`-like state where it takes up an entire row.

``` css
.container {
	display: flex;
}
```

### `display: inline-flex`

Same as `flex` but allows the parent element to be  `display: inline-block`.

``` css
.container {
	display: inline-flex;
}
```

## Orientation

### `flex-direction`

`row`, `row-reverse`, `column`, `column-reverse`

Choose the direction of the flexbox children, horizontally (`row`) or vertically (`column`).

``` css
.container {
	flex-direction: row;
}
```

### `flex-wrap`

`nowrap`, `wrap`, `wrap-reverse`

Whether to allow the child elements to wrap to another line or force them all on a single line.

``` css
.container {
	flex-wrap: wrap;
}
```

### `order`

Reorder a single child element within the flex flow.

``` css
.container {
	order: -1;
}
.container-2 {
	order: 2;
}
```

## Alignment

### `justify-content`

`flex-start`, `flex-end`, `center`, `space-between`, `space-around`

Control how the elements are spaced within their parent flex container.

``` css
.container {
	justify-content: center;
}
```

### `align-items`

`flex-start`, `flex-end`, `center`, `baseline`, `stretch`

Control how elements are aligned in the opposite direction of their justification.

``` css
.container {
	align-items: center;
}
```

`align-self` — is a similar property, but allows you to target a single child element, instead of all of the children.

``` css
.container {
flex-direction: row;
  align-self: flex-end;
}
```

### `align-content`

`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`

How to align the grouping of wrapped flex children—only works with `flex-wrap: wrap`.

``` css
.container {
	align-content: center;
}
```

## Flexibility

### `flex-basis`

Similar to `width` and `height` but not a guaranteed size: it can adjust up or down within the flex-parent to make sure the elements fit. It’s more like a suggestion.

``` css
.container {
	flex-basis: 50%;
}
```

### `flex-grow`

A unitless number that defines how much of the leftover space this element should be allotted. Chunks the leftover space and allots based on this multiplier.

Without `flex-grow` all elements will be allotted the same amount of space.

``` css
.container {
	flex-grow: 1;
}
```

### `flex-shrink`

Opposite to `flex-grow`: defines how much space it can shrink. If it can shrink. If there isn’t enough space available the element will remove allotments against this multiplier.

``` css
.container {
	flex-shrink: 1;
}
```

And that's what I know about flexbox. I hope you find it useful. If you have any questions, please let me know.
👇

Happy coding!