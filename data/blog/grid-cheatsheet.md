---
title: 'Grid Cheatsheet'
date: '2022-07-25'
tags: ['grid', 'css', 'cheatsheet']
draft: false
summary: 'The grid is a layout system that allows you to display elements in a way that allows them to flow freely and take up as much space as possible. It is a way to lay out elements in a way that allows them to flow freely and take up as much space as possible.'
---

![grid](/static/images/posts/grid.jpg)

## Parents

Properties to apply to the parent grid container element.

### `display: grid`

Turn a parent, container element into a grid. Causes all children to flow into grid cells.

```css
.container {
    display: grid;
}
```

### `grid-template-columns`

Define how the columns are measured & how many there are.

```css
.container {
    /* 3 columns, equal size */
    grid-template-columns: 1fr 1fr 1fr;
    /* 3 columns, different sizes */
    grid-template-columns: 20rem 1fr;
    /* Create 12 equal-width columns */
    grid-template-columns: repeat(12, 1fr);
}
```

### `grid-template-rows`

Define how the rows are measured & how many there are.

```css
.container {
    /* 2 rows, equal size */
    grid-template-rows: 1fr 1fr;
    /* 2 rows, different sizes */
    grid-template-rows: auto 3rem;
    /* Create 6 equal-height rows */
    grid-template-rows: repeat(6, 1fr);
}
```

### `grid-template-areas`

Create a series of named areas within the parent to move elements into.

```css
.container {
    /* 3 columns, 3 rows
     * Areas spanning more than 1 column/row
     */
    grid-template-areas:
  "masthead masthead toolbar"
  "main     main     sidebar"
  "footer   footer   sidebar";
}
```

### `gap, column-gap, row-gap`

Create space like a margin between the columns/rows of the grid.

```css
.container {
    grid-gap: 1rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
}
```

### `justify-content & align-items`

Align the elements horizontally within the grid. `content` moves all the elements together as a group. `items` moves
each element individually within their area.

```css
.container {
    justify-content: center;
    align-items: center;
}
```

### `align-content & align-items`

Align the elements vertically within the grid. `content` moves all the elements together as a group. `items` moves each
element individually within their area.

```css
.container {
    align-content: start;
    align-items: center;
}
```

### `place-content & place-items`

Apply both `justify` and `align` at the same time.

```css
.container {
    place-content: start;
    place-items: end;
}
```

### `grid-auto-columns & grid-auto-rows`

Define the size of automatically generated intrinsic rows & columns.

```css
.container {
    grid-auto-columns: 1fr;
    grid-auto-rows: 10rem;
}
```

### `grid auto-flow: dense`

Attempt to tightly pack grid cells, even moving cells earlier in the order.

```css
.container {
    grid-auto-flow: dense;
}
```

## Children

These properties are to be applied to the children of the grid parent container.

### `grid-column`

Choose which column the element starts & finishes at.

```css
.container {
    /* Start at column line 2 */
    grid-column: 2;
    /* Start at line 2, go to line 6 */
    grid-column: 2 / 6;
    /* Start at line 2, go to last line */
    grid-column: 2 / -1;
    /* Start at line 2, span horizontally 3 rows */
    grid-column: 2 / span 3;
}
```

### `grid-row`

Choose which row the element starts & finishes at.

```css
.container {
    /* Start at row line 2 */
    grid-row: 2;
    /* Start at line 2, go to line 6 */
    grid-row: 2 / 6;
    /* Start at line 2, go to last line */
    grid-row: 2 / -1;
    /* Start at line 2, span vertically 3 rows */
    grid-row: 2 / span 3;
}
```

### `grid-area`

Assign the element to a specific area in the grid.

```css
.container {
    grid-area: sidebar;
}
```

### `justify-self`

Move the element itself horizontally within its defined area.

```css
.container {
    justify-self: center;
}
```

### `align-self`

Move the element itself vertically within its defined area.

```css
.container {
    align-self: center;
}
```

### `place-self`

Apply both `justify-self` & `align-self` at the same time.

```css
.container {
    place-self: center;
}
```

## Getting fancy

Automatic responsive columns.

```css
.container {
    grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
}
```

### `display: contents`

Use on a parent element to get its children onto the grid.

Be careful with accessibility—some browsers don’t fully support it.

```css
.container {
    display: contents;
}
```