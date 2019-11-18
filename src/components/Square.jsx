import React from 'react'
import { ReactComponent as X } from '../images/X.svg'
import { ReactComponent as O } from '../images/O.svg'

function Square(props) {
  const number = props.number
  const [move, setMove] = props.move
  const [board, setBoard] = props.board
  const [winner, setWinner] = props.winner

  const Image = props => {
    if (props.boardN === 5) {
      return (
        <X
          fill={winner.indexOf(number) !== -1 ? 'red' : ''}
          width="100%"
          height="100%"
        />
      )
    } else if (props.boardN === 3) {
      return (
        <O
          fill={winner.indexOf(number) !== -1 ? 'red' : ''}
          width="100%"
          height="100%"
        />
      )
    } else {
      return <img />
    }
  }

  return (
    <div
      className="square"
      onClick={() => {
        if (board[number] === 0 && winner.length === 0) {
          setBoard(
            (() => {
              let newBoard = [...board]
              let newMove = move === 3 ? 5 : 3
              newBoard[number] = newMove
              setMove(newMove)
              return newBoard
            })()
          )
        }
      }}
    >
      <Image boardN={board[number]} />
    </div>
  )
}

export default Square
