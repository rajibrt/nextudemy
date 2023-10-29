import { BsArrowRightCircle } from "react-icons/bs";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";

export default function Category({ header, products, background }) {
  const isMedium = useMediaQuery({ query: "(max-width: 1300px" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px" });
  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        <BsArrowRightCircle />
      </div>
      <div className={styles.category__products}>
        {products
          .slice(0, isMobile ? 6 : isMedium ? 4 : 6)
          .map((product, i) => (
            <div key={i} className={styles.product}>
              <img src={product.image} alt="" />
              <h1>{product.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}