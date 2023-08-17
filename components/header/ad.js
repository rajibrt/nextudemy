import Link from "next/link";
import style from "./styles.module.scss";

export default function Ad() {
  return (
    <Link href="/browse">
      <div className={style.ad}></div>
    </Link>
  );
}
