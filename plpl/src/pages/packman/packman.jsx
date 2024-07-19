import { useEffect, useState } from "react";
import packManRight from "../../assets/packManRight.png";
import packManLeft from "../../assets/packManLeft.png";
import packManTop from "../../assets/packManTop.png";
import packManDown from "../../assets/packManDown.png";

export default function Packman() {
  const [pause, setPause] = useState(true);
  const [user, setUser] = useState(packManRight);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [coin, setCoin] = useState(0);
  const [leftApple, setLeftApple] = useState(50);
  const [topApple, setTopApple] = useState(50);
  const [seconds, setSeconds] = useState(60);

  const generateApplePosition = () => {
    const newLeftApple = Math.floor(Math.random() * 450);
    const newTopApple = Math.floor(Math.random() * 450);
    setLeftApple(newLeftApple - (newLeftApple % 50));
    setTopApple(newTopApple - (newTopApple % 50));
  };

  useEffect(() => {
    if (seconds === 0) {
      alert(`Finish, you have ${coin} coins!`);
      setSeconds(60);
      setCoin(0);
      generateApplePosition();
      setLeft(0);
      setTop(0);
      setPause(true);
      localStorage.setItem(
        "coin",
        Math.max(coin, localStorage.getItem("coin") || 0)
      );
    }
  }, [seconds]);

  useEffect(() => {
    generateApplePosition();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pause]);

  useEffect(() => {
    if (top === topApple && left === leftApple) {
      setCoin((prevCoin) => prevCoin + 1);
      generateApplePosition();
    }
  }, [top, left]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "Enter":
          setCoin(coin=> coin+=1);
          break;
        case "KeyW":
        case "ArrowUp":
          if (!pause) {
            setTop((prevTop) => (prevTop !== 0 ? prevTop - 50 : 450));
          }
          setUser(packManTop);
          break;
        case "KeyS":
        case "ArrowDown":
          if (!pause) {
            setTop((prevTop) => (prevTop !== 450 ? prevTop + 50 : 0));
          }
          setUser(packManDown);
          break;
        case "KeyA":
        case "ArrowLeft":
          if (!pause) {
            setLeft((prevLeft) => (prevLeft !== 0 ? prevLeft - 50 : 450));
          }
          setUser(packManLeft);
          break;
        case "KeyD":
        case "ArrowRight":
          if (!pause) {
            setLeft((prevLeft) => (prevLeft !== 450 ? prevLeft + 50 : 0));
          }
          setUser(packManRight);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pause]);

  return (
    <>
      <div className="flex py-[20px] justify-center gap-[30px]">
        <button
          onClick={() => (pause ? setPause(false) : setPause(true))}
          className="bg-red-600 text-white p-[3px_10px] rounded-md"
          style={{ background: `${pause ? "green" : "red"}` }}
        >
          {pause ? "Start" : "Pause"}
        </button>
        <button
          className="bg-orange-600 text-white p-[3px_10px] rounded-md"
          onClick={() => {
            setPause(true);
            setUser(packManRight);
            setLeft(0);
            setTop(0);
            setCoin(0);
            generateApplePosition();
            setSeconds(60);
          }}
        >
          Restart
        </button>
      </div>

      <div className="flex justify-center gap-[100px] items-center">
        <div className="border-[2px] overflow-hidden relative border-black h-[502px] w-[502px]">
          <div
            className="h-[50px] w-[50px] absolute flex justify-center"
            style={{ left: `${left}px`, top: `${top}px` }}
          >
            <img className="h-full" src={user} alt="" />
          </div>

          <div
            className="h-[50px] w-[50px] absolute"
            style={{ left: `${leftApple}px`, top: `${topApple}px` }}
          >
            <img
              className="w-full h-full"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <p>Timer: {seconds}sec.</p>
          <h1 className="text-[28px]">Your coins: {coin}</h1>
          <h1>Your record: {localStorage.getItem("coin") || 0}</h1>
        </div>
      </div>
    </>
  );
}
