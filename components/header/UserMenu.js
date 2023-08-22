import Link from "next/link";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { signOut, signIn } from "next-auth/react";
export default function UserMenu({ loggedIn }) {
  const { data: session } = useSession();
  return (
    <div className={styles.menu}>
      <h4>Welcome to CameraBazar !</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session.user.image} alt="" className={styles.menu__img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h2>{session.user.name}</h2>
            <span onClick={() => signOut()}>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outline} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/order">My Order</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
