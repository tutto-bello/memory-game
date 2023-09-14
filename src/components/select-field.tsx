import React, { Dispatch, SetStateAction } from "react";

interface SelectFieldProps {
  setLimit: Dispatch<SetStateAction<number>>;
}

const selectOption = [
  { label: "Easy", value: 6 },
  { label: "Medium", value: 9 },
  { label: "Hard", value: 15 },
];

const SelectField = (props: SelectFieldProps) => {
  const { setLimit } = props;
  return (
    <div className="">
      <label
        htmlFor="limit"
        className="block mb-1 text-sm font-medium text-gray-900"
      >
        Difficulty
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
