import React, { Dispatch, SetStateAction } from "react";
import RadioButtonsComponent from "./input-fileds/radio-buttons-component";
import SelectFieldComponent from "./input-fileds/select-field-component";
import TextFieldComponent from "./input-fileds/text-field-component";
import { modeOptions, themeOptions, difficultyOption } from "../utils";

interface DashboardComponent {
  setLimit: Dispatch<SetStateAction<number>>;
  mode: "singlePlayer" | "multiPlayer";
  setTheme: Dispatch<SetStateAction<"dog" | "cat">>;
  theme: "cat" | "dog";
  setMode: Dispatch<SetStateAction<"singlePlayer" | "multiPlayer">>;
  setIsGameStart: Dispatch<SetStateAction<boolean>>;
  setPlayerOneName: Dispatch<SetStateAction<string>>;
  setPlayerTwoName: Dispatch<SetStateAction<string>>;
  playerOneName: string;
  playerTwoName: string;
}

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
    playerOneName,
    playerTwoName,
  } = props;

  return (
    <div className="bg-white mx-auto md:w-max p-6 relative rounded-xl">
      <h2 className="text-xl md:text-2xl text-purple-500 font-bold uppercase text-center mb-4 mt-2">
        welcome to the memory game table
      </h2>
      <p className="text-gray-500 mb-4 text-center max-w-md mx-auto">
        Please select a mode, theme, difficulty and give your name to let the
        fun begin!
      </p>
      <div>
        <RadioButtonsComponent
          label="Mode"
          options={modeOptions}
          onChange={setMode}
          value={mode}
        />
        <div className="md:flex">
          <TextFieldComponent
            onChange={setPlayerOneName}
            label="Player One Name"
          />
          {mode === "multiPlayer" && (
            <div className="md:ml-6">
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
          disabled={
            mode === "multiPlayer"
              ? playerOneName === "" || playerTwoName === ""
              : playerOneName === ""
          }
          onClick={() => setIsGameStart(true)}
          className="text-whitw uppercase rounded-md bg-purple-500 hover:opacity-75 font-bold px-4 py-2 mt-4 text-white disabled:bg-gray-400 disable:opacity-90 disabled:cursor-not-allowed"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default DashboardComponent;
