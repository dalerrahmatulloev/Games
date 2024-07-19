import { Link } from "react-router-dom";
import packManRight from "../../assets/packManRight.png";
export default function Games() {
  return (
    <div onKeyUp={()=> console.log(1)} className="p-[20px] flex gap-[30px]">
      <Link to={"tictactoe"}>
        <div className="text-center">
          <div className="w-[70px] h-[70px] rounded-sm border-black border-[2px]">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <p className="text-[14px] pt-[3px]">Tic Tac Toe</p>
        </div>
      </Link>

      <Link to={"packman"}>
        <div className="text-center">
          <div className="w-[70px] flex justify-center h-[70px] rounded-sm border-black border-[2px]">
            <img
            className="h-full"
              src={packManRight}
              alt=""
            />
          </div>
          <p className="text-[14px] pt-[3px]">Pack Man</p>
        </div>
      </Link>
    </div>
  );
}
