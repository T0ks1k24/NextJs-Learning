"use client";

import { useEffect, useState } from "react";
import useInput from "@/hooks/useInput";
import styles from "./ProductList.module.css";
import CardProduct from "../CardProduct/CardProduct";
import { fetchProducts } from "@/services/productService";

export default function ProductList() {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	const input = useInput("");

	useEffect(() => {
		setLoading(true);

		const loadProducts = async () => {
			try {
				const data = await fetchProducts();
				setProduct(data);
			} catch (error) {
				console.error("Fetch error:", error);
			} finally {
				setLoading(false);
			}
		};
		loadProducts();
	}, []);

	return (
		<section>
			<label className={styles.label}>Пошук</label>
			<input type="text" className={styles.control} {...input} />
			{loading && <p className={styles.p}>Loading...</p>}
			{!loading && (
				<div className={styles.list}>
					{product
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
