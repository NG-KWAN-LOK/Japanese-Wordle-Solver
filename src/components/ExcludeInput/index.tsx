import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

interface ExcludeInputProps {
  handleSetExcludeWord: (e: object) => void;
}

const ExcludeInput: React.FC<ExcludeInputProps> = ({
  handleSetExcludeWord,
}) => {
  return (
    <div className={styles.container}>
      <textarea
        name="exclude"
        className={`${styles["container_input"]} ${styles["container_input-none"]}`}
        maxLength={44}
        rows={11}
        cols={3}
        onChange={handleSetExcludeWord}
        placeholder="含まれていませんの仮名をここに入力してください"
      />
    </div>
  );
};

export default ExcludeInput;
