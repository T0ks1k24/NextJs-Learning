"use client";

import Button from "../Button/Button";
import styles from "./CardProduct.module.css";

export default function CardProduct({ name, price, imgUrl }) {
	return (
		<li className={styles.card}>
			<img className={styles.img} src={imgUrl} alt="image" />
			<p className={styles.name_p}>{name}</p>
			<p className={styles.price_p}>{price}$</p>
			<Button className={styles.Button}>В кошик</Button>
		</li>
	);
}
