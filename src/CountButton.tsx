import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type Props = {
  locked: boolean;
  type: "mins" | "plus";
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function CountButton({ locked, type, setCount }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (type === "mins") {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      setCount((prev) => (prev < 5 ? prev + 1 : 5));
    }

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "mins" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
