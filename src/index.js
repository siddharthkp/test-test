import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import './styles.css'

// This is the popular way of using styled components
const Paragraph = styled.p`
  width: 400px;
  margin: auto;

  color: ${props => props.color};
  background: ${props => props.background};

  margin-bottom: 24px;
  padding: 12px;
`

// Slightly nicer syntax:
// You can pass a function at the top level
// if you the css util, you also get syntax highlighting
const Paragraph2 = styled.p(
  props => css`
    width: 400px;
    margin: auto;
    /* props can be accessed from the above props */
    color: ${props.color};
    background: ${props.background};

    margin-bottom: 24px;
    padding: 12px;
  `
)

// my favorite way: object syntax
const Paragraph3 = styled.p(props => ({
  width: '400px',
  margin: 'auto',
  // props can be accessed without the ${template syntax}
  color: props.color,
  background: props.background,
  // you can skip 'px' and use integer instead of string,
  // styled will add 'px' for web, mixed feelings about this one
  marginBottom: 24,
  padding: 12
}))

function App() {
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="it's a song">
          🎧
        </span>{' '}
        Alone Together by The Strokes
      </h1>
      <Paragraph color="blue" background="lightblue">
        No choice now, it's too late <br />
        Let him go, he gave up <br />
        I gave up <br />
        Lisa says, "Take time for me" <br />
        Dropping him down to his knees <br />
      </Paragraph>
      <Paragraph2 color="purple" background="pink">
        Ah, chest down...
        <br />
        Take me away <br />
        See I've got to explain <br />
        Things, they have changed <br />
        In such a permanent way <br />
        Life seems unreal <br />
        Can we go back to your place? <br />
        Oh, "You drink too much" <br />
        Makes me drink just the same
      </Paragraph2>
      <Paragraph3 color="green" background="aquamarine">
        People tried. Felt so right <br />
        Giving themselves good advice <br />
        Looking down sometimes felt nice...
      </Paragraph3>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
