import React, { useState } from "react";
import {
  setFirstSelect,
  isSameCard,
  firstSelector,
  matchesSelector,
  disableCardOpening,
} from "../redux/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import {RiQuestionMark} from "react-icons/ri"

export default function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);
  const firstSelect = useSelector((state) => firstSelector(state));
  const matches = useSelector((state) => matchesSelector(state));
  const dispatch = useDispatch();
  const cardOpeningCondition = useSelector((state) => state.cards.cardOpening);
  const url = `${process.env.REACT_APP_IMG_URL}${card.name}.png`

  const handleClick = () => {
      if (firstSelect === false) {
        dispatch(setFirstSelect(card.id))
      } else {
        dispatch(disableCardOpening())
        setIsOpen(true)
        setTimeout(() => {
          dispatch(isSameCard(card.id))
          setIsOpen(false);
        }, 1000);
      }
  }

  return (
    <div
      className={`card ${card.id === firstSelect || matches.includes(card.id) || isOpen ? "active": ""}`}
      onClick={cardOpeningCondition && firstSelect !== card.id ? handleClick: undefined}>

      <div className="back">
        <img src={url} alt={card.name}/>
      </div>

      <div className="front">
          <RiQuestionMark style={{width:40,height:40}}/>
      </div>
    </div>
  );
}
