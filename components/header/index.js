import Ad from "./Ad";
import Top from "./Top";
import style from "./styles.module.scss";
export default function Header() {
  return (
    <header className={style.header}>
      <Ad />
      <Top />
    </header>
  );
}
