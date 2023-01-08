# tea-processing
<p>Browser image processing with support for webp compression. Made for the purpose of reducing server load and hosting costs by offloading image processing to the clients browser.</p>

## Index
- [Features](#features)
- [Setup](#setup)
	- [Vanilla HTML/JavaScript](#vanilla-htmljavascript)
	- [ReactJS](#reactjs)
	- [NodeJS](#nodejs)
- [Usage](#usage)
- [Examples](#examples)

## Features
- Webp compression (Googles official codec)
- Scaling
- Croping
- Aspect ratio

## Setup
### Vanilla HTML/JavaScript
- Download the files from [GitHub](https://github.com/cameron-doyle/tea-processing) and add them to your project dir (make sure to maintain the directory structure).
- Include the index.js file in your HTML
```html
<script src="tea-processing.js" type="module"></script>
```
- Create main JavaScript file and import library
```js
import * as tp from "tea-processing.js";
```
- Include the main js file as a module.
```html
<script src="tea-processing.js" type="module"></script>
<script src="main.js" type="module"></script>
```
### ReactJS
TBD
### NodeJS
This library relies on Canvas which isn't available on Node natively, it is highly recommended to use a [polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill) with a package like [this one.](https://www.npmjs.com/package/canvas)








## Usage
TBD

## Examples
TBD