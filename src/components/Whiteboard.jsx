import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export default function Whiteboard() {

    const quote = [
        'Focus on the step in front of you, not the whole staircase.',
        'There is no failure, you either win, or you learn.',
        'The fact that you are trying is a proof that you are strong.',
        'Your mind has to be stronger than your feelings.',
        'Be afraid and do it anyway.'
    ]

    function randomQuote(){
        return  quote[Math.floor(Math.random() * quote.length)]
    }

  return (
    <Container>
        <h3>Today's inspirational Quote.</h3>
        <p>Quote:{randomQuote()} </p>
    </Container>
  )
}
