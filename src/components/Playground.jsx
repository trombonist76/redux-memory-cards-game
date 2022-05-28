import { useSelector } from "react-redux";
import { cardsSelector } from "../redux/cardsSlice";
import Card from "./Card";

export default function Playground() {
  const cards = useSelector((state) => cardsSelector(state));

  return (

    <div className="playground">
      {cards.map((card, index) => (
        <Card key={index} card={{ name: card, id: index }} />
      ))}
    </div>
  );
}
