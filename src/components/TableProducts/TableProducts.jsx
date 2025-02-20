"use client";

import { useEffect, useState } from "react";
import styles from "./TableProducts.module.css";
import { fetchProducts, deleteProduct } from "../../services/productService.js";

export default function TablePorduct({ onProductsUpdate }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		loadProducts();
	}, []);

	async function loadProducts() {
		const data = await fetchProducts();
		setProducts(data || []);
	}

	async function handleDeleteProduct(id) {
		await deleteProduct(id);
		alert("Продукт видалено!");
		loadProducts();
		onProductsUpdate();
	}

	return (
		<>
			<h2 className={styles.h1}>Products</h2>
			<div className={styles.productTableContainer}>
				<table className={styles.productTable}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
							<th>Image URL</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td className={styles.price}>
									${product.price}
								</td>
								<td className={styles.imageUrl}>
									{product.imageUrl}
								</td>
								<td>
									<button
										className={`${styles.button} ${styles.buttonEdit}`}
										onClick={() =>
											handleUpdateProduct(product.id)
										}
									>
										✏️
									</button>

									<button
										className={`${styles.button} ${styles.buttonDelete}`}
										onClick={() =>
											handleDeleteProduct(product.id)
										}
									>
										❌
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
