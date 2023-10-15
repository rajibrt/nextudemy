import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "@/components/home/main";
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";
import { women_dresses } from "@/data/home";

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=8ugmmpb4bn6exdlt")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Bangladesh",
        flag: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/bangladesh-flag-round-circle-icon.png",
      },
    },
  };
}
