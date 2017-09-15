import jump from 'jump.js'

const hero = document.querySelector('.hero')
const overlay = document.querySelector('.overlay')
const navigation = document.querySelector('.navigation')
const heroButton = hero.querySelector('.hero--learn_more')
const topButton = document.querySelector('.footer--top')

let offset = navigation.clientHeight + overlay.clientHeight
console.log(offset);

heroButton.addEventListener('click', e => {
  e.preventDefault()
  jump(hero.nextElementSibling, {
    duration: 250,
    offset: -(offset)
  })
})

topButton.addEventListener('click', e => {
  e.preventDefault()
  jump('body', {
    duration: 250
  })
})
