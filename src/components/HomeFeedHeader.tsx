import { TypeAnimation } from "react-type-animation";
import { ContinueWithTwitterButton } from "./ContinueWithTwitterButton";
import styles from "./HomeFeedHeader.module.css";
import Image from "next/image";
import { Chart } from "./Chart";

export const HomeFeedHeader = () => {
  const chartData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

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
        <div className={styles["top-get-extension"]}>
          <div className={styles["top-get-extension-text"]}> Get extension</div>
          <div className={styles["top-get-extension-logo"]}>
            <Image
              src={"/logo-chrome-store.png"}
              width={20}
              height={19}
              alt={""}
            />
          </div>
        </div>
      </div>
      <div className={`${styles["middle"]}`}>
        <Chart data={chartData} />
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
