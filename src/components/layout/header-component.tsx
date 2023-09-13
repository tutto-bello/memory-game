import React, { Dispatch, SetStateAction } from "react";
import SelectField from "../select-field";

interface HeaderComponentProps {
  setLimit: Dispatch<SetStateAction<number>>;
}

const HeaderComponent = (props: HeaderComponentProps) => {
  return (
    <div className="relative w-full items-center bg-transparent">
      <div className="container mx-auto">
        <SelectField setLimit={props.setLimit} />
      </div>
    </div>
  );
};

export default HeaderComponent;
