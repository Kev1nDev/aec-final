import { FunctionComponent } from "react";
import styles from "./TextStrong.module.css";

export type TextStrongType = {
  className?: string;
  text?: string;

  /** Variant props */
  density?: string;
};

const TextStrong: FunctionComponent<TextStrongType> = ({
  className = "",
  density = "Default",
  text = "Use cases",
}) => {
  return (
    <div
      className={[styles.textStrong, className].join(" ")}
      data-density={density}
    >
      <div className={styles.textStrong2}>{text}</div>
    </div>
  );
};

export default TextStrong;
