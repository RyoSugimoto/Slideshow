window.addEventListener('load', () => {
  document.documentElement.setAttribute('data-slideshow-images-loaded', true)

  const theSlideshow = new Slideshow(
    '#slideshow-list', {
      paginationContainer: '#slideshow-pagination',
      duration: 4000, // (millisecond)
    }
  )

  theSlideshow.start()
})
