import React, { useState } from "react";
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
  const [isInputing, setIsInputing] = useState<boolean>(false);
  const setColor = (type: number) => {
    // console.log(type);
    if (type == 1) {
      return styles["container_input-corr"];
    }
    if (type == 2) {
      return styles["container_input-pos"];
    }
    if (type == 3) {
      return styles["container_input-col"];
    }
    if (type == 4) {
      return styles["container_input-row"];
    }
  };

  const handleCompsition = (e) => {
    const type = e.type;
    const value = e.target.value;
    console.log("handleCompsition", type, value);

    // Composition start, and set it is inputing.
    if (type === "compositionstart") {
      setIsInputing(true);
      return;
    }
    // Composition stop, and set it is not inputing.
    if (type === "compositionend") {
      setIsInputing(false);
      handleSetInputText(e);
      autoFocusNextField(e);
      return;
    }
    // Type in English, it just a change.
    if (type === "change") {
      if (!isInputing) {
        handleSetInputText(e);
        autoFocusNextField(e);
      }
      return;
    }
    if (type === "keydown") {
      if (!isInputing) {
        autoFocusPreviousField(e);
        handleSetInputText(e);
      }
      return;
    }
  };

  const handleChange = (e) => {
    handleCompsition(e);
  };

  const handleKeyDown = (e) => {
    const keyCode = e.keyCode;
    if (keyCode == 8) {
      handleCompsition(e);
    }
    if (keyCode == 39) {
      handleFocusField(e, true);
    }
    if (keyCode == 37) {
      handleFocusField(e, false);
    }
  };

  const handleFocusField = (e, forward: boolean) => {
    const { value, id } = e.target;
    const [fieldName, fieldIndex] = id.split("-");
    let fieldIntIndex = Number(fieldIndex);

    e.preventDefault();
    document
      .querySelector<HTMLInputElement>(
        `input[id=field-${forward ? fieldIntIndex + 1 : fieldIntIndex - 1}]`
      )
      ?.focus();
  };

  const autoFocusPreviousField = (e) => {
    const { value, id } = e.target;
    const [fieldName, fieldIndex] = id.split("-");
    let fieldIntIndex = Number(fieldIndex);

    if (fieldIndex < 5) {
      if (value.length == 0) {
        e.preventDefault();
        document
          .querySelector<HTMLInputElement>(
            `input[id=field-${fieldIntIndex - 1}]`
          )
          ?.focus();
      }
    }
  };

  const autoFocusNextField = (e) => {
    const { maxLength, value, id } = e.target;
    const [fieldName, fieldIndex] = id.split("-");
    let fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength && fieldIndex < 4) {
      document
        .querySelector<HTMLInputElement>(`input[id=field-${fieldIntIndex + 1}]`)
        ?.focus();
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
          id="field-1"
          className={`${styles["container_input"]} ${setColor(
            inputText["charA"].type
          )}`}
          type="text"
          maxLength={1}
          onCompositionStart={handleCompsition}
          onCompositionUpdate={handleCompsition}
          onCompositionEnd={handleCompsition}
          onChange={handleChange}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charB"
          id="field-2"
          className={`${styles["container_input"]} ${setColor(
            inputText["charB"].type
          )}`}
          type="text"
          maxLength={1}
          onCompositionStart={handleCompsition}
          onCompositionUpdate={handleCompsition}
          onCompositionEnd={handleCompsition}
          onChange={handleChange}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charC"
          id="field-3"
          className={`${styles["container_input"]} ${setColor(
            inputText["charC"].type
          )}`}
          type="text"
          maxLength={1}
          onCompositionStart={handleCompsition}
          onCompositionUpdate={handleCompsition}
          onCompositionEnd={handleCompsition}
          onChange={handleChange}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onFocus={handleSetOnFocusField}
        />
        <input
          name="charD"
          id="field-4"
          className={`${styles["container_input"]} ${setColor(
            inputText["charD"].type
          )}`}
          type="text"
          maxLength={1}
          onCompositionStart={handleCompsition}
          onCompositionUpdate={handleCompsition}
          onCompositionEnd={handleCompsition}
          onChange={handleChange}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onFocus={handleSetOnFocusField}
        />
      </div>
    </div>
  );
};

export default InputBox;
