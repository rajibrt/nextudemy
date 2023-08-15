import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camera Bazar || Best camera shop in the Bangladesh</title>
        <meta name="description" content="Best camera shop in the Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.red}>Welcome to NextJS world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum
        suscipit quo, vel, quas eaque ex obcaecati unde iusto hic at cumque
        illum? Hic, nihil sit dicta vitae, reiciendis deserunt sint facilis
        consectetur ipsa saepe enim aliquam a obcaecati repellat voluptatum
        officia! Hic consectetur sed tempora sunt quod. Et, asperiores!
      </p>
      <button>Click</button>
    </div>
  );
}
