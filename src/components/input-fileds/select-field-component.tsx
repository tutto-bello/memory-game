import React, { Dispatch, SetStateAction } from "react";

interface SelectFieldProps {
  label: string;
  onChange: Dispatch<SetStateAction<any>>;
  selectOption: { label: string; value: string }[];
}

const SelectFieldComponent = (props: SelectFieldProps) => {
  const { label, onChange, selectOption } = props;
  return (
    <div className="mr-4">
      <label
        htmlFor={label}
        className="block mb-1 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        className="w-max bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value)
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

export default SelectFieldComponent;
