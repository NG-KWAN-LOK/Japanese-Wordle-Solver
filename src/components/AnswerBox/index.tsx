import React from "react";
import styles from "./style.module.scss";

interface AnswerBoxProps {
  answer: string[];
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <span>以下の単語をしてみてください</span>
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_answer}>
          {answer.length == 0 ? (
            <div className={styles.container_answer_error}>
              お勧めの単語はなし
            </div>
          ) : (
            answer.map((word, index) => {
              return (
                <div className={styles.container_answer_word} key={index}>
                  {word}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AnswerBox);
