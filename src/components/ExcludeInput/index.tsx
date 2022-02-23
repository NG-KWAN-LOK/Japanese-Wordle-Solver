import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

const ExcludeInput = ({ handleSetExcludeWord }) => {
  return (
    <div className={styles.container}>
      <textarea
        name="exclude"
        className={`${styles["container_input"]} ${styles["container_input-none"]}`}
        maxLength={44}
        rows={11}
        cols={3}
        onChange={handleSetExcludeWord}
      />
    </div>
  );
};

export default ExcludeInput;
