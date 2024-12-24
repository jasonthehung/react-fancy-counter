import { useEffect, useState } from "react";

import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

const Card = () => {
  const [count, setCount] = useState<number>(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setCount((prev) => (prev < 5 ? prev + 1 : 5));
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="mins" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
};

export default Card;
