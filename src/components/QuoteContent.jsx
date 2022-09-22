import React from 'react'

const QuoteContent = ({ randomQuote, randomColors, getRandomAll }) => {
  const colorObj = {
    color: randomColors
  }
  const backgroundObj = { backgroundColor: randomColors }
  return (
    <article style={{ backgroundColor: '#ffffff' }} className='card'>
      <p style={colorObj} className='card__quote'>{randomQuote.quote}</p>
      <h1 style={colorObj} className='card__author'>{randomQuote.author}</h1>
      <button style={backgroundObj} className='card__button' onClick={getRandomAll}>&#62;</button>
    </article>
  )
}

export default QuoteContent
