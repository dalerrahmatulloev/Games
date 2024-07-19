import { useState } from "react";
import krest from "../../assets/krest.png";
import nolik from "../../assets/nolik.png";

export default function Tictactoe() {
  let prov = 0;
  const [count, setCount] = useState(0);
  let [field, setField] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  function finish() {
    const winConditions = [
      [0, 4, 8],
      [2, 4, 6], // диагонали
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // горизонтали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // вертикали
    ];

    for (const [a, b, c] of winConditions) {
      if (field[a] !== null && field[a] === field[b] && field[a] === field[c]) {
        alert(field[a] === 0 ? "X wins" : "O wins");
        setField(Array(9).fill(null));
        setCount(0);
        return;
      }
    }

    if (!field.includes(null)) {
      alert("Draw");
      setField(Array(9).fill(null));
      setCount(0);
    }
  }
  return (
    <>
      <div className="flex h-screen justify-center items-center gap-[100px]">
        <div className="grid grid-cols-[120px_120px_120px] grid-rows-[120px_120px_120px]">
          {field.map((el, ind) => {
            return (
              <div
                onClick={() => {
                  field[ind] == 0 || field[ind] == 1
                    ? null
                    : ((field[ind] = count),
                      setField(field),
                      count == 0 ? setCount(1) : setCount(0)),
                    finish();
                }}
                className="flex items-center justify-center border-[black] border-[1px]"
              >
                {field[ind] == 0 ? (
                  <img src={krest} alt="" />
                ) : field[ind] == 1 ? (
                  <img className="w-[90%]" src={nolik} alt="" />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          <h1>Идёт игрок под знаком:</h1>
          {count == 0 ? <img className="w-[100px]" src={krest} alt="" /> : <img className="w-[100px]" src={nolik} alt="" />}
        </div>
      </div>
    </>
  );
}