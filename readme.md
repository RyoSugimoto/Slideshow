# Slideshow

## Usage

### HTML

```html
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
```

### JavaScript

```js
const theSlideshow = new Slideshow(
  '#slideshow-list', {
    navContainer: '#slideshow-pagination',
    duration: 4000, // (millisecond)
  }
)

theSlideshow.start()
```
