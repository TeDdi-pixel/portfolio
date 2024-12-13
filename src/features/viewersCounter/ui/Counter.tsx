const Counter = ({ displayValue }: { displayValue: number }) => {
  return (
    <span className="text-[20px] text-texture font-bold min-w-[40px] text-center">
      {displayValue}
    </span>
  );
};

export default Counter;
