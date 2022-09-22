import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import { randomColors } from './components/ColorRandom'

function App () {
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  const firstElement = quotes[getIndexRandom(quotes)]
  const color = randomColors
  const [randomQuote, setRandomQuote] = useState(firstElement)
  const [rColors, setRandomColor] = useState(color)
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color)
  }
  console.log(color)
  return (
    <div style={{ backgroundColor: rColors }} className='App'>
      <QuoteBox
        randomQuote={randomQuote} setRandomQuote={setRandomQuote}
        randomColors={rColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
