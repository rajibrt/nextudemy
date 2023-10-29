import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function ProductsSwiper({ header, products }) {
  return <div className={styles.wrapper}></div>;
  {
    header && <div className={styles.header}>{header}</div>;
  }
  <Swiper
    slidesPerView={6}
    spaceBetween={30}
    Navigation={true}
    modules={[Navigation]}
    className="products__swiper"
  >
    <SwiperSlide>
      <div className={styles.product}>
        <img src="" alt="" />
      </div>
    </SwiperSlide>
  </Swiper>;
}
