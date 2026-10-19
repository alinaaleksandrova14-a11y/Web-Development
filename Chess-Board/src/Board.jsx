import React from 'react'
import Square from './Square.jsx'

function Board() {
  var squaresArray = []

  for (var row = 0; row < 8; row = row + 1) {
    for (var col = 0; col < 8; col = col + 1) {
      var isLight = (row + col) % 2 === 0
      var squareKey = row + '-' + col

      squaresArray.push(
        <Square key={squareKey} isInitialLight={isLight} />
      )
    }
  }

  var boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 50px)',
    gridTemplateRows: 'repeat(8, 50px)',
    width: '400px',
    height: '400px',
    border: '2px solid #333'
  }

  return (
    <div style={boardStyle}>
      {squaresArray}
    </div>
  )
}

export default Board