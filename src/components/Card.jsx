import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButtton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0)


  return (
    <div className="card">
        <Title />
        <Count count={count} />
        <ResetButtton />
        <CountButtons setCount={setCount} />
      </div>
  )
}
