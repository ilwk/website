---
title: Prettier代码风格指南
date: 2023-07-16
description: 本文包含了一份Prettier代码风格指南，虽然我已经不用它，但是还是留个备份
---

## 使用尾随逗号

Prettier: `trailingComma: "all"`

```js
// Bad
const object = {
	property1: "content",
	"property2": "content"
};

// Good
const object = {
	"property1": "content",
	"property2": "content",
};
```

## 使用箭头括号

Prettier: arrowParens

```js
// Bad
x => x

// Good
(x) => x

```

## HTML标签属性换行

Prettier: singleAttributePerLine: false

```html
// Bad
<div
	 class="name"
	 id="name"
>
	Content
</div>

// Good
<div class="name" id="name">
	Content
</div>

```