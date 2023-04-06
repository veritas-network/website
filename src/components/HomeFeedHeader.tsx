import styles from "./HomeFeedHeader.module.css";
import Image from "next/image";

export const HomeFeedHeader = () => {
  return (
    <div className={styles["root-container"]}>
      <div className={styles["top"]}>
        <div className={styles["top-logo"]}>
          <Image
            src={"/logo128.png"}
            width={32}
            height={32}
            alt="Veritas Network logo"
            style={{ marginRight: "5px" }}
          />
          Veritas Network
        </div>
        <div className={styles["top-continue-with-twitter"]}>
          Continue with Twitter
        </div>
      </div>
      <div className={styles["middle"]}></div>
      <div className={styles["bottom"]}></div>
    </div>
  );
};
