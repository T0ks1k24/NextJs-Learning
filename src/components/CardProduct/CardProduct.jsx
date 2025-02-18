"use client";

import { useEffect, useState, useCallback } from "react";
import useInput from "@/hooks/useInput";
import styles from "./CardProduct.module.css";

export default function CardProduct() {
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
			{loaging && <p>Loading...</p>}
			{!loaging && (
				<ul>
					<input type="text" className="control" {...input} />
					{product1
						.filter((prod) =>
							prod.name
								.toLowerCase()
								.includes(input.value.toLowerCase())
						)
						.map((prod) => (
							<li key={prod.id}>
								<strong>{prod.name}</strong>
								<p>{prod.price}</p>
							</li>
						))}
				</ul>
			)}
		</section>
	);

	// return (
	// 	<section>
	// 		<div className={styles.div}>
	// 			<img className={styles.img} src={imgUrl} alt="image" />
	// 			<p className={styles.name_p}>{product.name}</p>
	// 			<p className={styles.price_p}>{product.price}</p>
	// 		</div>
	// 	</section>
	// );
}
