import React from "react";
import styles from "./style.module.scss";

interface PopupInfoProps {
  isPopup: boolean;
  handleClosePopup: () => void;
}

const PopupInfo: React.FC<PopupInfoProps> = ({ isPopup, handleClosePopup }) => {
  return (
    <div
      className={`${isPopup ? styles["container"] : styles["container-none"]}`}
      onClick={handleClosePopup}
    >
      <div
        className={styles.container_layer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.container_layer_title}>
          <div className={styles.container_layer_title_content}>
            <span>ついて</span>
            <small>About</small>
          </div>
          <button onClick={handleClosePopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className={styles.container_layer_text}>
          <p>これは「言葉で遊ぼう」に沿って、答えを求めるのサイトです。</p>
          <p>This website is the solver of the Kotobade Asobou.</p>
        </div>
        <div className={styles.container_layer_text}>
          <p>もし気に入ってもらえたら、ぜひ友達に共有してください！</p>
          <p>If you liked it, please feel free to share with your friends!</p>
        </div>
        <div className={styles.container_layer_text}>
          <a href="https://github.com/NG-KWAN-LOK/Japanese-Wordle-Solver">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupInfo;
