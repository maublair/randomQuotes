import { useState } from 'react'
import './App.css'
// import QuoteBox from './components/QuoteBox'
import QuoteContent from './components/QuoteContent'
import quotes from './json/quotes.json'
import { randomColors } from './utils/ColorRandom'

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
      <QuoteContent
        randomQuote={randomQuote} setRandomQuote={setRandomQuote}
        randomColors={rColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
