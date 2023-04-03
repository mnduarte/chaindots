import { SetStateAction, Dispatch } from "react";
import "./styles.css";

interface SeachProps {
  options: string[];
  placeholder?: string;
  onChange: Dispatch<SetStateAction<string>>;
}

interface OptionPlaceholderProps {
  placeholder: string;
}

const OptionPlaceholder = ({ placeholder }: OptionPlaceholderProps) => (
  <option value="DEFAULT" disabled selected hidden>
    {placeholder}
  </option>
);

export const Select = ({ options, placeholder, onChange }: SeachProps) => {
  return (
    <select
      name="regions"
      className="border-shadow"
      onChange={(e) => onChange(e.target.value)}
    >
      {placeholder && <OptionPlaceholder placeholder={placeholder} />}
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
