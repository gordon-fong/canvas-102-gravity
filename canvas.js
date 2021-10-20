const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

let dotArr = []
let gravity = 1

// utility functions
const randNumBetween = (min, max, isInt) => {
  const randNum = Math.random() * (max - min) + min
  return (
    isInt ? Math.floor(randNum) : randNum
  )
}

const updateDots = () => {

  dotArr.map((dot) => {
    if (dot.yDir < 0.001 && dot.yDir > -0.001){
      dot.yPos = 0
      dot.yDir = randNumBetween(10, 15)
    }

    if ((dot.yPos + dot.yDir > canvas.height || dot.yPos + dot.yDir < 0) && dot.yDir !== 0) {
      dot.yDir = -dot.yDir * randNumBetween(0, 0.3)
    } else {
      dot.yDir += gravity
    } 

    dot.yPos += dot.yDir

    drawDot(dot.xPos, dot.yPos, dot.rad)
  })
}

const drawDot = (xPos, yPos, rad) => {
  ctx.beginPath()
  ctx.arc(xPos, yPos, rad, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fillStyle = 'teal'
  ctx.fill()
}


const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(tick)
    updateDots()
}

const init = () => {
  dotArr = []
  for (i = 0; i < 500; i++) {
    const xPos = randNumBetween(0, canvas.width)
    const yPos = randNumBetween(0, canvas.height)
    const xDir = 0
    const yDir = 1
    const rad = randNumBetween(1, 4)

    const dotData = { xPos, yPos, xDir, yDir, rad }

    dotArr.push(dotData)
  }
  // console.log(dotArr)
  dotArr.map((dot) => {
    drawDot(dot.xPos, dot.yPos, dot.rad)
  })

  tick()
}

init()