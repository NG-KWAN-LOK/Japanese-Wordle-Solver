import React from "react";
import styles from "./style.module.scss";
import { IInputText } from "../../utils/interface";

interface InputBoxProps {
  handleSetInputText: (e: object) => void;
  handleSetOnFocusField: (e: object) => void;
  inputText: IInputText;
}

const InputBox: React.FC<InputBoxProps> = ({
  handleSetInputText,
  handleSetOnFocusField,
  inputText,
}) => {
  const setColor = (type) => {
    // console.log(type);
    if (type == 1) {
      return styles["container_input-corr"];
    }
    if (type == 2) {
      return styles["container_input-pos"];
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <span>
          只今最も良いの単語を入力してください、そして各仮名のヒントの色を選んでください
        </span>
      </div>
      <div className={styles.container_content}>
        <input
          name="charA"
          className={`${styles["container_input"]} ${setColor(
            inputText["charA"].type
          )}`}
          type="text"
          maxLength={1}
          onChange={handleSetInputText}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charB"
          className={`${styles["container_input"]} ${setColor(
            inputText["charB"].type
          )}`}
          type="text"
          maxLength={1}
          onChange={handleSetInputText}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charC"
          className={`${styles["container_input"]} ${setColor(
            inputText["charC"].type
          )}`}
          type="text"
          maxLength={1}
          onChange={handleSetInputText}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charD"
          className={`${styles["container_input"]} ${setColor(
            inputText["charD"].type
          )}`}
          type="text"
          maxLength={1}
          onChange={handleSetInputText}
          onFocus={handleSetOnFocusField}
        />
      </div>
    </div>
  );
};

export default InputBox;
