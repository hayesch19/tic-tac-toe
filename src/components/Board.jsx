import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [winner, setWinner] = useState([])
  const [move, setMove] = useState(Math.random() > 0.5 ? 5 : 3)

  return (
    <div className="game-board">
      <div className="row">
        <Square number={0} />
        <Square number={1} />
        <Square number={2} />
      </div>
      <div className="row">
        <Square number={3} />
        <Square number={4} />
        <Square number={5} />
      </div>
      <div className="row">
        <Square number={6} />
        <Square number={7} />
        <Square number={8} />
      </div>
    </div>
  )
}

export default Board
