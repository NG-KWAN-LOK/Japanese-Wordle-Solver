import React from "react";
import styles from "./style.module.scss";

interface ColorButtonProps {
  handleSetInputType: (e: object) => void;
  disable: boolean;
}

const ColorButton: React.FC<ColorButtonProps> = ({
  handleSetInputType,
  disable,
}) => {
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
      <button
        name="col"
        value={3}
        type="submit"
        className={`${styles["container_button"]} ${styles["container_button-col"]}`}
        onClick={handleSetInputType}
        disabled={disable}
      >
        縦
      </button>
      <button
        name="row"
        value={4}
        type="submit"
        className={`${styles["container_button"]} ${styles["container_button-row"]}`}
        onClick={handleSetInputType}
        disabled={disable}
      >
        横
      </button>
    </div>
  );
};

export default ColorButton;
