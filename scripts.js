const container = document.getElementById('container')
const colours = ['#FF9591', '#E191FF', '#91FFFC', '#FDAB42', '#BDFB9F']
const SQUARES = 400

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColour(square))

    square.addEventListener('mouseout', () => removeColour(square))

    container.appendChild(square)
}

function setColour(element) {
   const colour = getRandomColour()
   element.style.background = colour
   element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`
}

function removeColour(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)]
}