import Ad from "./Ad";
import Top from "./Top";
import style from "./styles.module.scss";
import Main from "./Main";
export default function Header({ country }) {
  return (
    <header className={style.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
}
