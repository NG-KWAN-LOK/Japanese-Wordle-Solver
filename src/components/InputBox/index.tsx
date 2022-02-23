import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

const InputBox = ({ handleSetInputText, handleSetOnFocusField, inputText }) => {
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
  );
};

export default InputBox;
