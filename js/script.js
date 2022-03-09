const slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0

function flippSlide (step) {
  slides[currentSlide].className = 'slide'
  currentSlide = (step + slides.length) % slides.length
  slides[currentSlide].className = 'slide showing'
}

const clickNextSlide = () => flippSlide(currentSlide+1)

const clickPreviousSlide = () => flippSlide(currentSlide-1)

let playing = true

let goSlideShow

const showSlide = () => {
  clickNextSlide()
  return goSlideShow = setTimeout(() => showSlide(), 3000)
}

showSlide()

const pauseButton = document.getElementById('pause')

function stopSlideshow () {
  pauseButton.innerHTML = '&#9658;' // play character
  playing = false
  clearTimeout(goSlideShow)
}

function playSlideshow () {
  pauseButton.innerHTML = '&#10074;&#10074;' // pause character
  playing = true
  showSlide()
}

pauseButton.onclick = () => playing ? stopSlideshow() : playSlideshow()

document.getElementById('next').onclick = event => {
  stopSlideshow()
  clickNextSlide()
}
document.getElementById('previous').onclick = event => {
  stopSlideshow()
  clickPreviousSlide()
}

