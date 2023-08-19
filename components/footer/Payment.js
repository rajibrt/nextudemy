import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwarp}>
        <img src="/sslcommerz.webp" alt="" />
      </div>
    </div>
  );
}
