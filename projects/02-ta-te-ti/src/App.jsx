import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./Components/Square"
import { TURNS } from "./constants"
import { WINNER_COMBOS } from "./constants"
import { checkWinnerFrom, checkEndGame} from "./logic/board"
import { WinnerModal } from "./Components/WinnerModal"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :  Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    TURNS.X
  
  })
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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
    //Guardar partida
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      //La actualizacion de los estado en react es asincronos
      confetti()
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

      <WinnerModal resetGame={resetGame} winner={winner}/>

     
    </main>
  )
}

export default App
