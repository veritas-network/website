import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";
import { TweetContainer } from "@/components/TweetContainer";
import { HomeFeedHeader } from "@/components/HomeFeedHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Veritas Network</title>
        <meta
          name="description"
          content="Track the accuracy of future predictions or factuality statements on Twitter. Crypto prices, conspiracy theories or simply weather tomorrow. Decentralized."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["home-root-container"]}>
        <HomeFeedHeader />
        <div className={styles["feed-container"]}>
          <TweetContainer />
          <TweetContainer />
          <TweetContainer />
          <TweetContainer />
          <TweetContainer />
        </div>
      </div>
    </>
  );
}
