import React, { Dispatch, SetStateAction } from "react";
import RadioButtonsComponent from "./input-fileds/radio-buttons-component";
import SelectFieldComponent from "./input-fileds/select-field-component";
import TextFieldComponent from "./input-fileds/text-field-component";

interface DashboardComponent {
  setLimit: Dispatch<SetStateAction<number>>;
  mode: "singlePlayer" | "multiPlayer";
  setTheme: Dispatch<SetStateAction<"dog" | "cat">>;
  theme: "cat" | "dog";
  setMode: Dispatch<SetStateAction<"singlePlayer" | "multiPlayer">>;
  setIsGameStart: Dispatch<SetStateAction<boolean>>;
  setPlayerOneName: Dispatch<SetStateAction<string>>;
  setPlayerTwoName: Dispatch<SetStateAction<string>>;
}

const modeOptions = [
  { label: "One Player", value: "singlePlayer" },
  { label: "Two Player", value: "multiPlayer" },
];

const themeOptions = [
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
];

const difficultyOption = [
  { label: "Easy", value: "6" },
  { label: "Medium", value: "9" },
  { label: "Hard", value: "15" },
];

const DashboardComponent = (props: DashboardComponent) => {
  const {
    mode,
    setMode,
    setTheme,
    theme,
    setLimit,
    setIsGameStart,
    setPlayerOneName,
    setPlayerTwoName,
  } = props;

  return (
    <div className="bg-white mx-auto w-max p-6 relative rounded-xl">
      <h2 className="text-2xl text-purple-500 font-bold uppercase text-center mb-4 mt-2">
        welcome to the memory game table
      </h2>
      <p className="mb-4 text-center">
        Please select a mode, theme and difficulty to let the fun begin!
      </p>
      <div>
        <RadioButtonsComponent
          label="Mode"
          options={modeOptions}
          onChange={setMode}
          value={mode}
        />
        <div className="flex">
          <TextFieldComponent
            onChange={setPlayerOneName}
            label="Player One Name"
          />
          {mode === "multiPlayer" && (
            <div className="ml-6 transition duration-300">
              <TextFieldComponent
                onChange={setPlayerTwoName}
                label="Player Two Name"
              />
            </div>
          )}
        </div>
      </div>
      <RadioButtonsComponent
        label="Theme"
        options={themeOptions}
        onChange={setTheme}
        value={theme}
      />
      <SelectFieldComponent
        label="Difficulty"
        onChange={setLimit}
        selectOption={difficultyOption}
      />
      <div className="text-center">
        <button
          onClick={() => setIsGameStart(true)}
          className="text-whitw uppercase rounded-md bg-purple-500 hover:opacity-75 font-bold px-4 py-2 mt-4 text-white"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default DashboardComponent;
