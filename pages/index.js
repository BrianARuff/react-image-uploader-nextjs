import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import ImageUploader from "../components/ImageUploader";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Image Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageUploader />
    </div>
  );
}
