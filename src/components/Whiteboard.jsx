
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

export default function Whiteboard() {

    const [presentQuote,  setPresentQuote] = useState(' ')

    const quote = [
        'Focus on the step in front of you, not the whole staircase.',
        'There is no failure, you either win, or you learn.',
        'The fact that you are trying is a proof that you are strong.',
        'Your mind has to be stronger than your feelings.',
        'Be afraid and do it anyway.',
        'You can always build anew; but you cannot build on what you have destroyed.',
        'Do not wait for things to happen. Wait for opportunity to come to you.',
        'You can start late, look different, be uncertain, and still succeed!',
        'Progress OVER Perfection.'
    ]

    function randomQuote(){
        setPresentQuote( quote[Math.floor(Math.random() * quote.length)])
        console.log(presentQuote);
        // return presentQuote
    }



  return (
    <Container>
        <h3>How are you doing today? If no one has told you already, you are doing great! You got this!!</h3>
        <p> {presentQuote} </p>
        <button onClick={randomQuote}>Click for Inspo</button>
    </Container>
  )
  }