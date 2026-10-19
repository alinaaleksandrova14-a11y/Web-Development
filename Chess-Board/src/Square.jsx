import React, { useState } from 'react'

function Square(props) {
  var [isLight, setIsLight] = useState(props.isInitialLight)

  var squareStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: isLight ? '#d3b5f0' : '#8b63b5', 
    border: 'none',
    padding: 0,
    margin: 0,
    cursor: 'pointer'
  }

  function handleClick() {
    setIsLight(!isLight)
  }

  return (
    <button style={squareStyle} onClick={handleClick}></button>
  )
}

export default Square