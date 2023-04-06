import styles from "./TweetContainer.module.css";
import Image from "next/image";

export const TweetContainer = () => {
  return (
    <div className={styles["tweet-container"]}>
      <div className={styles["tweet-container-left"]}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden" }}>
          <Image
            src={"/logo128.png"}
            width={48}
            height={48}
            alt="Veritas Network logo"
          />
        </div>
      </div>
      <div className={styles["tweet-container-right"]}>
        <div className={styles["tweet-header-data"]}>
          <div className={styles["tweet-header-data-name"]}>
            Veritas Network
          </div>
          <div className={styles["tweet-header-data-username"]}>
            @veritasnetwr
          </div>
          <div className={styles["tweet-header-data-time"]}>5 days ago</div>
        </div>
        <div>
          as dasdasdasasdasdadasad asdsadadsad sadasdadd adasdad asdasdada
          aasdsads asdasd asdsadad asdasd saasda asdasd asdas dsa adasda sasd
          asd as dasdasdasasdasdadasad asdsadadsad sadasdadd adasdad asdasdada
          aasdsads asdasd asdsadad asdasd saasda asdasd asdas dsa adasda sasd
          asd as dasdasdasasdasdadasad asdsadadsad sadasdadd adasdad asdasdada
          aasdsads asdasd asdsadad asdasd saasda asdasd asdas dsa adasda sasd
          asd as dasdasdasasdasdadasad asdsadadsad sadasdadd adasdad asdasdada
          aasdsads asdasd asdsadad asdasd saasda asdasd asdas dsa adasda sasd
          asd as dasdasdasasdasdadasad asdsadadsad sadasdadd adasdad asdasdada
          aasdsads asdasd asdsadad asdasd saasda asdasd asdas dsa adasda sasd
          asd
        </div>
      </div>
    </div>
  );
};
