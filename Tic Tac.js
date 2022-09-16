import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};
let recordedPosition = []; // This needs to live in the hierach of the app
function Square({ setBoardClicked, postion, setplayerPos }) {
  // let [player, setplayer] = useState('')
  const handleClick = (e) => {
    // setplayer("X")
    e.target.innerText = "X";
    setBoardClicked(true);
    setplayerPos(postion);
  };

  return (
    <div
      className="square"
      id={`${postion}`}
      style={squareStyle}
      onClick={handleClick}
    >
      {/* // {player} */}
    </div>
  );
}

function Board() {
  const [boardClick, setBoardClicked] = useState(false);
  const [playerPos, setplayerPos] = useState(false);
  const [, setPosition] = useState([]);
  const [Playerinfo, setPlayerInfo] = useState([]);

  let maxBoard = 9;
  let minBoard = 1;

  const getRandom = () => {
    let result = null;
    let randomchar =
      Math.floor(Math.random() * (maxBoard - minBoard + 1)) + minBoard; //generated random number in range
    if (recordedPosition.includes(randomchar)) {
      // This needs to live in the hierach of the app
      for (let i = 1; i <= maxBoard; i++) {
        if (!recordedPosition.includes(i)) {
          result = i;
        }
      }
    } else {
      result = randomchar;
    }
    recordedPosition.push(result); // This needs to live in the hierach of the app
    return result;
  };
  //

  useEffect(() => {
    if (boardClick) {
      recordedPosition.push(playerPos);
      setPlayerInfo([...Playerinfo, playerPos]);
      Playerinfo.push(playerPos);
      let random = getRandom();
      // console.log(recordedPosition)// This needs to live in the hierach of the app
      let target = document.getElementById(`${random}`);
      setTimeout(() => {
        target.innerText = "O";
      }, 1000);
    }
    let result = TicTacToeGame(Playerinfo, reset, recordedPosition);
    setBoardClicked(false);
    //cleanup
    return () => {
      setBoardClicked(false);
    };
  }, [boardClick]);
  const reset = () => {
    let allfields = document.querySelectorAll(".square");
    allfields.forEach((field) => (field.innerText = ""));
    setPosition([]);
    setBoardClicked(false);
    recordedPosition.length = 0;
    setPlayerInfo([]);
    setplayerPos(false);
    //Should reload with window.location.reload()
  };
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>X</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>None</span>
      </div>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            setplayerPos={setplayerPos}
            postion={1}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={2}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={3}
            setBoardClicked={setBoardClicked}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            setplayerPos={setplayerPos}
            postion={4}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={5}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={6}
            setBoardClicked={setBoardClicked}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            setplayerPos={setplayerPos}
            postion={7}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={8}
            setBoardClicked={setBoardClicked}
          />
          <Square
            setplayerPos={setplayerPos}
            postion={9}
            setBoardClicked={setBoardClicked}
          />
        </div>
      </div>
    </div>
  );
}
let winner = (message, reset) => {
  let winnerBoard = document.getElementById("winnerArea");
  // if(player){
  // winnerBoard.innerText = `Winner: `
  // }
  alert(message);
  reset();
};

function TicTacToeGame(info = [], reset, movingPositions) {
  if (info.length > 2) {
    let sortedInfo = info.sort((a, b) => a - b);
    for (let i = 0; i < sortedInfo.length; i++) {
      if (
        sortedInfo[i + 1] - 1 === sortedInfo[i] &&
        sortedInfo[i + 2] - 2 === sortedInfo[i]
      ) {
        winner("YOU WON", reset, "X");
      }
      if (
        sortedInfo[i + 1] - 4 === sortedInfo[i] &&
        sortedInfo[i + 2] - 8 === sortedInfo[i]
      ) {
        winner("YOU WON", reset, "X");
      }
      if (
        sortedInfo[i + 1] - 3 === sortedInfo[i] &&
        sortedInfo[i + 2] - 6 === sortedInfo[i]
      ) {
        winner("YOU WON", reset, "X");
      }
      if (
        sortedInfo[i + 1] - 2 === sortedInfo[i] &&
        sortedInfo[i + 2] - 4 === sortedInfo[i]
      ) {
        winner("YOU WON", reset, "X");
      }
    }
  }
  if (info.length === 5) {
    winner("YOU Lost", reset, "");
  }
}

export function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
