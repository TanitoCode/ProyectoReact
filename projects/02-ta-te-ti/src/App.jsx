import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O'
}



const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  //Metodo para determinar el ganador
  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //Si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    // si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    //no actualizamos esta posicion si ya tiene algo
    //o tenemos un ganador
    if (board[index] || winner) return

    const newBoard = [...board]

    //spread y rest operator 
    // structureclone

    //Actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      //La actualizacion de los estado en react es asincronos
      setWinner(newWinner)
      //alert(`El ganador es ${newWinner}`)
      //Check is game is over
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Gano:'
                }

              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
