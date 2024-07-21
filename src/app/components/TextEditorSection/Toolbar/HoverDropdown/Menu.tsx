import { OptionType } from "../Buttons/types";
import Option, { OptionProps } from "./Option";

export default ({
  options,
  onClick,
  isOpen,
}: {
  options: OptionType[];
  onClick: any;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`absolute z-1000 right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out ${
        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul>
        {options.map((option, idx) => (
          <Option
            key={idx}
            label={option.label}
            value={option.value}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};
