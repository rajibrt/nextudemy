import User from "./User";
import Menu from "./Menu";
import Offers from "./offers";
import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import Header from "./Header";
export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
}
