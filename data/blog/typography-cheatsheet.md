---
title: 'Web typography cheat sheet'
date: '2022-07-28'
tags: ['web', 'typography', 'cheatsheet']
draft: false
summary: 'The web typography cheat sheet is a collection of useful typography styles that can be used to style your web pages.'
---

![flexbox](/static/images/posts/font.jpg)

Web typography useful styles that can be used to style your web pages.

## Metrics

### `1rem, 100%, 16px`

**Body copy size** — should never be smaller.

`110%` for large screens.

`120%` for extra large screens.

### `1.3 - 1.5`

**Body line-height** - looser on the web.

`1.3` for small screens.

`1.4` for medium screens.

`1.5` for large screens.

### `30em - 40em`

**Body maximum line-length** - Shorter on small screens is okay.

## Units

### `rem`

Based on the font-size set in the `html` element `1.5rem is 1.5x the html` element's font-size.

### `em`

Based on the font-size of the parent(or current element).

`1em` is 1x the parent's element's size.

`0.5em` is 0.5x the parent's element's size.

### `%`

A percentage of the font-size of the parent element.

`80%` is to 80% of the parent's element's size.

### `vh`

Allows you to change the typed size based on the height of the window.

### `vw`

Allows you to change the typed size based on the width of the window.

### `px`

CSS pixels - different size for every device.

`16ppx` is exactly 16 pixels in all situations.

## Properties

### `color`

The color of the text.

```css
color: #fff;
```

### `font-family`

Change the typeface of the text.

```css
font-family: 'Open Sans', sans-serif;
```

### `font-size`

Change the size of the text.

```css
font-size: 1.5rem;
```

### `font-weight`

Change the weight of the text. (`bold`, `normal`, `400`, `700`)

```css
font-weight: 700;
```

### `font-style`

Change the capitalization of the text. (`italic`, `normal`)

```css
font-style: italic;
```

### `line-height`

Adjust the space line takes up, similar to leading

```css
line-height: 1.5;
```

### `text-align`

Adjust the position of the text within its parent. (`left`).

```css
text-align: left;
```

### `text-decoration`

Add a decoration to the text. (`underline`, `none`, `line-through`, `overline`)

```css
text-decoration: underline;
```

### `text-indent`

Indent the first line of text.

```css
text-indent: 1em;
```

### `text-transform`

Change the capitalization of the text. (`uppercase`, `lowercase`, `capitalize`)

```css
text-transform: uppercase;
```

### `text-shadow`

Add a shadow to the text.

```css
text-shadow: 1px 1px 1px #000;
```

### `text-overflow`

Determine what happens to the text if it's too wide for its box.

```css
text-overflow: ellipsis;
```

### `list-style-type`

Control the style of bullets on a list. (`none`, `disc`, `circle`, `square`, `decimal`, `lower-roman`, `upper-roman`, `lower-alpha`, `upper-alpha`, `lower-greek`, `lower-latin`, `upper-latin`, `armenian`, `georgian`, `cjk-ideographic`, `hebrew`, `katakana`, `hiragana`, `none`)

```css
list-style: none;
```

### `font`

Shorthand property for specifying lots of font details.

```css
font: 1.5rem/1.5 'Open Sans', sans-serif;
```

### `letter-spacing`

Controls the space between the different letters.

```css
letter-spacing: 1px;
```

### `word-spacing`

Controls the space between the different words.

```css
word-spacing: 1px;
```

### `white-space`

Controls how the text wraps. (`normal`, `nowrap`, `pre`)

```css
white-space: nowrap;
```

### `word-wrap`

Controls whether the browser is allowed to break really long words. (`normal`, `break-word`)

```css
word-wrap: break-word;
```

## Text flow columns

For making text flow between a few columns.

### `column-count`

Set to the number of columns wanted in the text block.

```css
column-count: 2;
```

### `column-gap`

Set the amount of space between the columns.

```css
column-gap: 1rem;
```

### `column-rule`

Create a vertical border between each column.

```css
column-rule: 1px solid #000;
```

## Experimental properties

These properties may not work in all browsers and may have a major performance impact.

### `hyphens`

Control if the text will be hyphenated.

Usually requires `text-align: justify`, `none`, `auto`.

```css
hyphens: auto;
```

### `font-kerning`

Control a font’s built-in kerning metrics.

`none`, `normal`, `auto`

```css
font-kerning: normal;
```

### `font-variant-ligatures`

Control whether ligatures are used or not.

`none`,`normal`, `common-ligatures`, `contextual`

```css
font-variant-ligatures: normal;
```

### `font-variant-numeric`

Enable/disabled alternative glyphs for numbers & fractions.

`normal`, `ordinal`, `slashed-zero`, `oldstyle-nums`, `tabular-nums`

```css
font-variant-numeric: normal;
```

### `font-variant-caps`

Control whether small caps are used or not.
`normal`, `small-caps`

```css
font-variant-caps: small-caps;
```

### `text-rendering`

Controls a bunch of the `font-variant` properties automatically.

```css
text-rendering: optimizeLegibility;
```

And that's what I know about web typography. I hope you find it useful. If you have any questions, please let me know. 👇

Happy coding!
