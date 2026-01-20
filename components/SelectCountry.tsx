"use client";

import { contries } from "@/lib/countries";

interface SelectCountryProps {
  value: string;
  onChange: (code: string) => void;
}
const SelectCountry = ({ value, onChange }: SelectCountryProps) => {
  return (
    <div className="">
      <label className="mr-2" htmlFor="country">
        Select Country
      </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {contries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectCountry;
