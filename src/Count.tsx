type Props = {
  count: number;
};

const Count = ({ count }: Props) => {
  return <p className="count">{count}</p>;
};

export default Count;
