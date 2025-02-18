"use client";

import { useEffect, useState, useCallback } from "react";
import useInput from "@/hooks/useInput";
import styles from "./CardProductList.module.css";
import CardProduct from "../CardProduct/CardProduct";

export default function CardProductList() {
	const [product, setProduct] = useState({
		name: "",
		price: "",
		imgUrl: "",
	});
	const [loaging, setLoading] = useState(false);
	const [product1, setProduct1] = useState([]);

	const input = useInput("");

	const fecthProduct = useCallback(async () => {
		setLoading(true);
		const response = await fetch("https://localhost:7117/api/product");
		const products = await response.json();
		setProduct1(products);
		setLoading(false);
	}, []);

	useEffect(() => {
		fecthProduct();
	}, [fecthProduct]);

	return (
		<section>
      <label className={styles.label}>Пошук</label>
      <input type="text" className={styles.control} {...input} />
			{loaging && <p className={styles.p}>Loading...</p>}
			{!loaging && (
				<div className={styles.list}>
					{product1
						.filter((prod) =>
							prod.name
								.toLowerCase()
								.includes(input.value.toLowerCase())
						)
						.map((prod) => (
							<CardProduct
								key={prod.id}
								name={prod.name}
								price={prod.price}
								imgUrl={prod.imageUrl}
							/>
						))}
				</div>
			)}
		</section>
	);
}
