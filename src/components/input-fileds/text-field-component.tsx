import React, { Dispatch, SetStateAction } from "react";

interface TextFieldComponentProps {
  onChange: Dispatch<SetStateAction<any>>;
  label: string;
  required?: boolean;
  placeholder?: string;
}

const TextFieldComponent = (props: TextFieldComponentProps) => {
  const { label, onChange, required, placeholder } = props;
  return (
    <div className="relative mb-3 pt-1">
      <input
        type="text"
        className="peer h-full w-full rounded-b-[6px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        id={label}
        name={label}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
      <label
        htmlFor={label}
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:border-purple-500 peer-focus:after:border-t-1 peer-focus:after:border-r-1 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

export default TextFieldComponent;
