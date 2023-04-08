import styles from "./ContinueWithTwitterButton.module.css";
import { BsTwitter } from "react-icons/bs";

export const ContinueWithTwitterButton = () => {
  return (
    <div className={styles["root-container"]}>
      <BsTwitter className={styles["twitter-logo"]} />
      Continue with Twitter
    </div>
  );
};
