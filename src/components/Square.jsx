import React from 'react'
import { ReactComponent as X } from '../images/X.svg'
import { ReactComponent as O } from '../images/O.svg'

function Square(props) {
  const number = props.number
  const [move, setMove] = props.move
  const [board, setBoard] = props.board
  const [winner, setWinner] = props.winner

  return (
    <>
      <button></button>
    </>
  )
}

export default Square
