import React from 'react'

const hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let posarray
let colorRandom = '#'

export function randomColors () {
  const random = (lower, upper) => {
    const numPosibilities = upper - lower
    let random = Math.random() * numPosibilities
    random = Math.floor(random)
    return parseInt(lower) + random
  }
  colorRandom = '#'
  for (let i = 0; i < 6; i++) {
    posarray = random(0, hexadecimal.length)
    colorRandom += hexadecimal[posarray]
  }
  return (colorRandom)
}
