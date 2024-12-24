import { ResetIcon } from "@radix-ui/react-icons";

type Props = {
  setCount: (value: number) => void;
};

const ResetButton = ({ setCount }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
