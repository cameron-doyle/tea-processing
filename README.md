# Tea Processing
<p>Browser image processing with support for webp compression. Made for the purpose of reducing server load and hosting costs by offloading image processing to the clients browser.</p>

## Index
- [Prerequisites](#prerequisites)
- [Features](#features)
- [Setup](#setup)
	- [Vanilla HTML/JavaScript](#vanilla-htmljavascript)
	- [ReactJS](#reactjs)
	- [NodeJS](#nodejs)
- [API](#api)
	- [Get Blob](#getblobimgfile)
	- [Compress](#compressimgblob-quality)
	- [Apply Ratio](#applyratioimgblob-ratio-targetresolution)
	- [Scale](#scaleimgblob-px-on)
	- [Crop](#cropimgblob-cropoptions)
	- [Get Dimensions](#getdimensionsimgblob)
	- [Get Ratio](#getratioimgblob)
- [Examples](#examples)
	- [Get Blob](#get-blob)
	- [Compress](#compress)
	- [Apply Ratio](#apply-ratio)
	- [Scale](#scale)
	- [Crop](#crop)
	- [Get Dimensions](#get-dimensions)
	- [Get Ratio](#get-ratio)

## Prerequisites
- [WASM](https://caniuse.com/wasm) support
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) support (not native for NodeJS)

## Features
- [Webp compression](#compressimgblob-quality) (Implemented with [Google's official codec](https://chromium.googlesource.com/webm/libwebp))
- [Scaling](#scaleimgblob-px-on)
- [Croping](#cropimgblob-cropoptions)
- [Aspect ratio](#applyratioimgblob-ratio-targetresolution)

## Setup
### Vanilla HTML/JavaScript
- Download the files from [GitHub](https://github.com/cameron-doyle/tea-processing) and add them to your project dir (make sure to maintain the directory structure).

- Create main JavaScript file and import library
```js
import {compress, crop, etc} from "tea-processing.js";
```

- Include the main js file as a module.
```html
<script src="main.js" type="module"></script>
```

<br>

### ReactJS
- Install the npm package
```cli
npm i tea-processing
```
- Import the package in your code
```js
import {compress, crop, etc} from "tea-processing.js";
```

<br>

### NodeJS
This library relies on Canvas which isn't available on Node natively, it is highly recommended to use a [polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill) with a package like [this one.](https://www.npmjs.com/package/canvas)
(Yet to have tested)


<br>

## API
### [getBlob(imgFile)](#get-blob)
Returns a `Promise<Blob>` with the image data.

#### imgFile
Type: [`File`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files)

<br>

### [compress(imgBlob, quality?)](#compress)
Returns a `Promise<Blob>` with the compressed image data.

#### imgBlob
Type: `Blob`

#### quality (optional)
Type: `number`<br>
Default: `75`

<br>

### [applyRatio(imgBlob, ratio, targetResolution?)](#apply-ratio)
Returns a `Promise<Blob>` with the image data that's been cropped to right the desired ratio.

#### imgBlob
Type: `Blob`

#### ratio
Type: `Float`

#### targetResolution (optional)
Type: `object` | `null` { **px**:`number`, **dimention**:`string` = `"width"` or `"height"` }<br>
Determines the desired width or height in pixels to scale to.

<br>

### [scale(imgBlob, px, on)](#scale)
Returns a `Promise<Blob>` with the image data that's been scaled up or down, to meet the desired resolution on either the width or height, while maintaining the original aspect ratio.

#### imgBlob
Type: `Blob`

#### px
Type: `number`

#### on
Type: `string` = `"width"` | `"height"`

<br>

### [crop(imgBlob, cropOptions)](#crop)
Returns a `Promise<Blob>` with the image data that's been cropped.

#### imgBlob
Type: `Blob`

#### cropOptions
Type: `object` { **top**?:`number`, **right**?:`number`, **bottom**?:`number`, **left**?:`number` }<br>
Example: If you wanted to crop 20px from the top, and 3px from the right, you would pass **{ top:20, right:3 }**

<br>

### [getDimensions(imgBlob)](#get-dimensions)
Returns a `Promise<object>` ***{ width: number, height: number }*** with the images width and height in pixels 

#### imgBlob
Type: `Blob`

<br>

### [getRatio(imgBlob)](#get-ratio)
Returns a `Promise<float>` with the images aspect ratio

#### imgBlob
Type: `Blob`



<br>

## Examples
### [Get Blob](#getblobimgfile)
```js
//e.target is referencing a HTML file input
let imgBlob = await getBlob(e.target.files[0])
```

<br>

### [Compress](#compressimgblob-quality)
```js
//compress to 50% quality
imgBlob = await compress(imgBlob, 50)
```

<br>

### [Apply Ratio](#applyratioimgblob-ratio-targetresolution)
A target height of 1080 at the ratio of **16/9** will produce an image with the resolution of ***1920*** by ***1080*** pixels.
```js
imgBlob = await applyRatio(imgBlob, 16/9, { px:1080, dimention:"height" })
```

<br>

### [Scale](#scaleimgblob-px-on)
NOTE: if you're using [Apply Ratio](#applyratioimgblob-ratio-targetresolution), it's more reliable to use the built in [scaling parameter](#targetresolution-optional) that's provided by Apply Ratio rather than the [scale](#scaleimgblob-px-on) function
```js
imgBlob = await scale(imgBlob, 1080, "height")
```

<br>

### [Crop](#cropimgblob-cropoptions)
```js
imgBlob = await crop(imgBlob, { left: 40, right: 20 })
```

<br>

### [Get Dimensions](#getdimensionsimgblob)
```js
const dimensions = await getDimensions(imgBlob)
```

<br>

### [Get Ratio](#getratioimgblob)
```js
//container is referencing a HTML div
const ratio = await getRatio(imgBlob)
container.setAttribute("style", `aspect-ratio: ${ratio};`)
```
