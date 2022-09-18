import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";

import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Home.module.css";

const page_data = [
  {
    videoURL: "https://inkstory.s3.ap-south-1.amazonaws.com/Videos/psy_vid1.mp4",
    pdfURL: "/psm1.pdf"
  },
  {
    videoURL: "https://inkstory.s3.ap-south-1.amazonaws.com/Videos/pom_part2.mp4",
    pdfURL: "/psm2.pdf"
  },
  {
    videoURL: "https://inkstory.s3.ap-south-1.amazonaws.com/Videos/pom_part3.mp4",
    pdfURL: "/psm3.pdf"
  },
]

const Home = () => {
  const { width, height } = useWindowDimensions();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const vidContWidth = width > 600 ? width / 2 - width * 0.1 : 0.9 * width;

  return (
    <div className={styles.container}>
      <Head>
        <title>Inkstory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/icons/logo.svg" // Route of the image file
          height={100} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Beekle"
        />

        <p className={styles.description}></p>

        {page_data.map((pd, i) => <div key={i} className={styles.vidContainer} style={{ flexDirection: width > 600 ? i % 2 === 0 ? 'row' : 'row-reverse' : 'column'}}>
          {domLoaded && (
            <ReactPlayer
              url={pd['videoURL']}
              width={vidContWidth}
              height={vidContWidth}
              controls
            />
          )}
          <iframe style={{ height: vidContWidth, width: vidContWidth }} src={pd['pdfURL']} />
        </div>)}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
