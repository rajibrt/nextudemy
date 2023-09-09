import Link from "next/link";
import styles from "./styles.module.scss";
export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">Store</Link>
        </li>
        <li>
          <Link href="">DSLR Camera</Link>
        </li>
        <li>
          <Link href="">Nikon</Link>
        </li>
      </ul>
    </div>
  );
}
