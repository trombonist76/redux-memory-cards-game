import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseTime, matchesSelector } from "../redux/cardsSlice";
import {BiTimer} from "react-icons/bi"
import { secToDate } from "../services";
import { addFinishedGame } from "../redux/recentGamesSlice";


export default function Timer() {
  const matches = useSelector((state) => matchesSelector(state));
  const time = useSelector((state) => state.cards.time);
  const point = useSelector((state) => state.cards.point);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (matches.length < 30) {
      interval = setInterval(() => {
        dispatch(increaseTime());
      }, 1000);
    }else{
        dispatch(addFinishedGame({point,time}))
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, dispatch, matches, point]);

  return (
      <div className="timer">
      <BiTimer/>
       {secToDate(time)}
      </div>
  );
}
