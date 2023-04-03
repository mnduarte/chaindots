import { SetStateAction, Dispatch } from "react";
import "./styles.css";

interface SeachProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Search = ({ value, onChange }: SeachProps) => (
  <input
    className="search-input border-shadow"
    type="search"
    value={value}
    placeholder="Search for a country..."
    onChange={(e) => onChange(e.target.value)}
  />
);
