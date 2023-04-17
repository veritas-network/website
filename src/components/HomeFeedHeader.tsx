import { ContinueWithTwitterButton } from "./ContinueWithTwitterButton";
import styles from "./HomeFeedHeader.module.css";
import Image from "next/image";
import { Chart } from "./Chart";

export const HomeFeedHeader = () => {
  return (
    <div className={styles["root-container"]}>
      <div className={styles["header"]}>
        <div className={styles["logo"]}>
          <Image
            src={"/logo128.png"}
            width={32}
            height={32}
            alt="Veritas Network logo"
            style={{ marginRight: "5px" }}
          />
          Veritas Network
        </div>
        <div className={styles["get-extension"]}>
          <div className={styles["get-extension-text"]}> Get extension</div>
          <div className={styles["get-extension-logo"]}>
            <Image
              src={"/logo-chrome-store.png"}
              width={20}
              height={19}
              alt={""}
            />
          </div>
        </div>
      </div>
      <div className={styles["body"]}>
        {/* <TypeAnimation
          sequence={[
            "Find truth.",
            1000,
            "Earn reputation.",
            2000,
            "Compete.",
            () => {},
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block", color: "#536471" }}
        /> */}
        <div className={styles["continue-with-twitter-container"]}>
          <div className={styles["continue-with-twitter-button"]}>
            <ContinueWithTwitterButton />
          </div>
          and get a free Veritas checkmark
        </div>
      </div>
      {/* <div className={styles["bottom"]}></div> */}
    </div>
  );
};
