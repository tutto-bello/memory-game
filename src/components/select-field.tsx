import React, { Dispatch, SetStateAction } from "react";

interface SelectFieldProps {
  setLimit: Dispatch<SetStateAction<number>>;
}

const selectOption = [
  { label: "Five", value: 5 },
  { label: "Six", value: 6 },
  { label: "Seven", value: 7 },
  { label: "Eight", value: 8 },
  { label: "Nine", value: 9 },
  { label: "Ten", value: 10 },
];

const SelectField = (props: SelectFieldProps) => {
  const { setLimit } = props;
  return (
    <div className="">
      <label
        htmlFor="limit"
        className="block mb-1 text-sm font-medium text-gray-900"
      >
        Select card pair number
      </label>
      <select
        id="limit"
        className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setLimit(Number(event.target.value))
        }
      >
        {selectOption.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
