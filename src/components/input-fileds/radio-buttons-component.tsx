import React, { Dispatch, SetStateAction } from "react";

interface RadioButtonsComponentProps {
  value: string | number;
  options: { label: string; value: string }[];
  label: string;
  onChange: Dispatch<SetStateAction<any>>;
}

const RadioButtonsComponent = (props: RadioButtonsComponentProps) => {
  const { value, options, label, onChange } = props;
  return (
    <div className="mb-4">
      <label>{label}</label>
      <div className="flex flex-wrap">
        {options.map((item) => (
          <div
            className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mr-4"
            key={item.value}
          >
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-purple-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-purple-500 checked:after:bg-purple-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="radio"
              name={label}
              id={item.value}
              value={item.value}
              checked={value === item.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor={item.value}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonsComponent;
