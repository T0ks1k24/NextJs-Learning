"use client";

import styles from "./CardProduct.module.css";

export default function CardProduct({ name, price, imgUrl }) {
	return (
		<li className={styles.card}>
			<img className={styles.img} src={imgUrl} alt="image" />
			<p className={styles.name_p}>{name}</p>
			<p className={styles.price_p}>{price}$</p>
		</li>
	);
}
