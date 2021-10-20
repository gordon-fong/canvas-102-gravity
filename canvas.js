const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

// utility functions
const randNumBetween = (min, max) => {
  return (
    Math.random() * (max - min) + min
  )
}

const drawDot = () => {
  ctx.beginPath()
  ctx.arc(window.innerWidth/2, window.innerHeight/2, 50, 0, Math.PI*2)
  ctx.closePath()
  ctx.fillStyle = 'red'
  ctx.fill()
}

drawDot()