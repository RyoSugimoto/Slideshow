const pageGraph = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-1 -1 50 50"><circle data-slideshow-page-graph-holder cx="24" cy="24" r="24" /><circle data-slideshow-page-graph cx="24" cy="24" r="24" /></svg>'

export default class Slideshow {
  pages = []
  currentIndex = 0
  duration = 5000
  paginationContainer = null

  constructor(el, options) {
    this.element = this.getHtmlElement(el)
    if (!this.element) return false

    this.element.setAttribute('data-slideshow', '')

    options = {
      paginationContainer: null,
      duration: 5000,
      ...options
    }

    this.options = options

    this.slideshowItems = this.element.querySelectorAll(':scope > *')

    this.paginationContainer = this.getHtmlElement(options.paginationContainer)

    this.currentIndex = 0

    if (this.slideshowItems.length > 0 && this.paginationContainer) {
      this.slideshowItems.forEach((slideshowItem, index) => {
        // loop slides
        slideshowItem.setAttribute('data-slideshow-item', '')
        // create pagination
        this.createPagination(index)
      })
      // append pages
      this.pages.map(page => {
        this.paginationContainer.append(page)
      })
    }
  }

  getHtmlElement(element) {
    if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
      return null
    } else if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

  createPagination(index) {
    const page = document.createElement('span')
    page.insertAdjacentHTML('beforeend', pageGraph)
    page.insertAdjacentHTML('beforeend', index + 1)
    page.setAttribute('data-slideshow-page', '')
    page.style.setProperty('--circumference', 48 * Math.PI)
    this.pages.push(page)
  }

  start() {
    this.startTime = new Date().getTime()
    requestAnimationFrame(() => {
      this.step(this.options.duration)
    })
  }

  step() {
    const timestamp = new Date().getTime()
    const elapsed = timestamp - this.startTime
    if (this.options.duration > elapsed) {
      this.render(elapsed)
    } else {
      this.startTime = new Date().getTime()
      this.currentIndex = (this.slideshowItems.length <= this.currentIndex + 1) ? 0 : this.currentIndex + 1
    }
    requestAnimationFrame(() => { this.step() })
  }

  render(elapsed) {
    this.slideshowItems.forEach((slideshowItem, index) => {
      if (index === this.currentIndex) {
        slideshowItem.classList.add('is-current')
      } else {
        slideshowItem.classList.remove('is-current')
      }
    })

    this.pages.forEach((page, index) => {
      if (index === this.currentIndex) {
        const rate = elapsed / this.options.duration * 100
        page.classList.add('is-current')
        page.style.setProperty('--progress', Math.round(rate) / 100)
      } else {
        page.classList.remove('is-current')
        page.style.setProperty('--progress', 1)
      }
    })
  }
}
