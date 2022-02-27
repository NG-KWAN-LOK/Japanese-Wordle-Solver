import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import InputBox from "../InputBox";
import ColorButton from "../ColorButton";
import ExcludeInput from "../ExcludeInput";
import AnswerBox from "../AnswerBox";

import { IInputText } from "../../utils/interface";
import searchWord from "../../utils/process";

const Home: React.FC = () => {
  const [inputText, setInputText] = useState<IInputText>({
    charA: { char: "", type: 0 },
    charB: { char: "", type: 0 },
    charC: { char: "", type: 0 },
    charD: { char: "", type: 0 },
  });
  const [answer, setAnswer] = useState<string[]>([]);
  const [onFocusField, setOnFocusField] = useState<string>("charA");

  const [excludeWord, setExcludeWord] = useState<string>("");

  const handleSetOnFocusField = useCallback(
    (e) => {
      // console.log("onfocus :", e.target.name);
      setOnFocusField(e.target.name);
    },
    [onFocusField]
  );

  const handleSetExcludeWord = useCallback(
    (e) => {
      setExcludeWord(e.target.value);
    },
    [excludeWord]
  );

  const handleSetInputText = (e) => {
    let { name, value } = e.target;
    // value = value.replace(/ /g, "");
    // console.log("inputTextValue:", value, e.target.id);
    setInputText({
      ...inputText,
      [name]: {
        char: value,
        type:
          value != ""
            ? inputText[name].type == 0
              ? 1
              : inputText[name].type
            : 0,
      },
    });
  };

  const handleSetInputType = (e) => {
    const value: number = Number(e.target.value);
    setInputText({
      ...inputText,
      [onFocusField]: {
        char: inputText[onFocusField].char,
        type: value,
      },
    });
  };

  const isColorButtonDisable = () => {
    return inputText[onFocusField].char === "" ? true : false;
  };

  const handleSubmit = () => {
    setAnswer(searchWord(inputText, excludeWord));
  };

  const isEnterButtonDisable = () => {
    if (excludeWord.length != 0) return false;
    let flag = true;
    Object.keys(inputText).map((objectKey) => {
      if (inputText[objectKey].char != "") flag = false;
    });
    return flag;
  };

  return (
    <div className={styles.container}>
      <InputBox
        handleSetInputText={handleSetInputText}
        handleSetOnFocusField={handleSetOnFocusField}
        inputText={inputText}
      />
      <ColorButton
        handleSetInputType={handleSetInputType}
        disable={isColorButtonDisable()}
      />
      <ExcludeInput handleSetExcludeWord={handleSetExcludeWord} />
      <div className={styles.container_submit}>
        <button
          name="subit"
          type="submit"
          className={`${styles["container_button"]}`}
          onClick={handleSubmit}
          disabled={isEnterButtonDisable()}
        >
          ⏎
        </button>
      </div>
      <AnswerBox answer={answer} />
    </div>
  );
};

export default Home;
