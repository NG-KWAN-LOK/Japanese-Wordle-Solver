import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

const ColorButton = ({ handleSetInputType, disable }) => {
  return (
    <div className={styles.container}>
      <button
        name="corr"
        value={1}
        type="submit"
        className={`${styles["container_button"]} ${styles["container_button-corr"]}`}
        onClick={handleSetInputType}
        disabled={disable}
      >
        正
      </button>
      <button
        name="pos"
        value={2}
        type="submit"
        className={`${styles["container_button"]} ${styles["container_button-pos"]}`}
        onClick={handleSetInputType}
        disabled={disable}
      >
        違
      </button>
    </div>
  );
};

export default ColorButton;
