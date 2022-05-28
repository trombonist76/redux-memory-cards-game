import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { firstSelector, replay } from "../redux/cardsSlice";


export default function Navbar() {
  const score = useSelector((state) => state.cards.point);
  const replayCond = useSelector(state=>state.cards.cardOpening)
  const firstSelect = useSelector((state) => firstSelector(state));
  const dispatch = useDispatch()
  const handleClick = () => {
    setTimeout(() => {
      dispatch(replay())
    }, 500);
  }

  return (
    <div className="navbar">
      <Timer />
      <div className="content">
        <div className="score">
          <span>Your Score</span>
          <span>{score}pt</span>
        </div>
        <div className="replay">
            <button disabled={!replayCond || firstSelect} onClick={handleClick}>Replay</button>
        </div>
      </div>
    </div>
  );
}

