# Slideshow

## Usage

### 1. Load the library

Find the `.css` and `.js` files that you need in `dist` directory and put it in `your-path`.

### CSS

```html
<!-- in <head> -->
<link rel="stylesheet" href="your-path/slideshow.css">
```

### JavaScript

Case 1: Load in HTML

```html
<!-- HTML -->
<script src="your-path/slideshow.js"></script>
```

Case 2: Use ES module

```js
// JavaScript
import Slideshow from 'your-path/slideshow.module.js'
```

### 2. Write HTML

```html
<!-- Parent -->
<div>

  <!-- Slide -->
  <ul id="slideshow-list">
    <li>
      <img src="./assets/01.jpg" alt="">
    </li>
    <li>
      <img src="./assets/02.jpg" alt="">
    </li>
    <li>
      <img src="./assets/03.jpg" alt="">
    </li>
  </ul>

  <!-- Container for pagination -->
  <div id="slideshow-pagination"></div>
</div>
```

### 3. Create an instance and start to play

```js
const theSlideshow = new Slideshow(
  '#slideshow-list', {
    navContainer: '#slideshow-pagination',
    duration: 4000, // (millisecond)
  }
)

theSlideshow.start()
```
