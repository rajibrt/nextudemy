import { BiRightArrowAlt } from "node_modules/react-icons/bi";
import styles from "./styles.module.scss";
export default function CircledIconBtn({ type, text, icon }) {
  return (
    <button className={styles.button} type={type}>
      {text}
      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  );
}
