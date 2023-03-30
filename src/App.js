import React from "react";

function App() {
const[name,setName]=React.useState("Player 1")
const[count,setCount]=React.useState(0)
  const handleClick1=(()=>{
    setCount(count+1)
    name==="Player 1"?setName("Player 2"):setName("Player 1")

  })
  const handleClick2=(()=>{
    setCount(count+2)
    name==="Player 1"?setName("Player 2"):setName("Player 1")
  })
  
  const handleReset=(()=>{
    setName("Player 1")
    setCount(0)

  })
  return (
    <div className="App">

      {/* Display Player Turn here */}
      <span data-testid="turn-container">It's your turn {name}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" disabled={count===10} onClick={handleClick1}>+1</button>
        <button data-testid="add-two-btn" disabled={count>=9} onClick={handleClick2}>+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{count}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">{count===10?name==="Player 1"?"Player 2":"Player 1":"Still To Be Decided"}</span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;