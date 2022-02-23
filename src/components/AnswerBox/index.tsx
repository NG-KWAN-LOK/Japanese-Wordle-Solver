import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

const AnswerBox = ({ answer }) => {
  console.log(answer);
  return (
    <div className={styles.container}>
      <div className={styles.container_answer}>
        {answer.map((word, index) => {
          return (
            <div className={styles.container_answer_word} key={index}>
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(AnswerBox);
