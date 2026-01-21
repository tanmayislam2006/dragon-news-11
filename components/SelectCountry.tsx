"use client";

import { countries } from "@/lib/countries";

interface SelectCountryProps {
  value: string;
  onChange: (code: string) => void;
}
const SelectCountry = ({ value, onChange }: SelectCountryProps) => {
  return (
    <div className="flex items-center gap-3 mb-6 justify-center">
      <label className="font-medium text-gray-700 dark:text-gray-200" htmlFor="country">
        Select Country
      </label>
      <select
        id="country"
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 dark:border-slate-600"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectCountry;
