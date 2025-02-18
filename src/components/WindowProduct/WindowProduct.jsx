"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import PopupWindow from "../PopupWindow/PopupWindow";
import styles from "./WindowProduct.module.css";

export default function WindowProduct() {
	const [modalProduct, setModalProduct] = useState(false);
	const [category, setCategory] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		price: "",
		imageUrl: "",
		categoryId: "",
	});

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("https://localhost:7117/api/category");
				if (!response.ok) throw new Error("Network response was not ok");
				const data = await response.json();
				setCategory(data);
			} catch (error) {
				console.error("Fetch error:", error);
			}
		};

		fetchCategories();
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Валідація
		if (!formData.name || !formData.price || !formData.categoryId) {
			alert("Заповніть всі обов’язкові поля!");
			return;
		}

		if (isNaN(parseFloat(formData.price))) {
			alert("Ціна має бути числом!");
			return;
		}

		try {
			const response = await fetch("https://localhost:7117/api/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!response.ok) throw new Error("Не вдалося додати продукт");

			alert("Продукт додано!");
			setModalProduct(false);
			setFormData({
				name: "",
				description: "",
				price: "",
				imageUrl: "",
				categoryId: "",
			});
		} catch (error) {
			console.error("Помилка:", error);
			alert("Помилка при додаванні продукту!");
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.div_product}>
				<Button onClick={() => setModalProduct(true)}>Додати Продукт</Button>

				{modalProduct && (
					<div className={styles.popup}>
						<h3>Додати Продукт</h3>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="name"
								placeholder="Введіть назву"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="description"
								placeholder="Введіть опис"
								value={formData.description}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="price"
								placeholder="Введіть ціну"
								value={formData.price}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="imageUrl"
								placeholder="Введіть посилання на фотографію"
								value={formData.imageUrl}
								onChange={handleChange}
							/>
							<select
								name="categoryId"
								className={styles.select}
								value={formData.categoryId}
								onChange={handleChange}
								required
							>
								<option value="">Оберіть категорію</option>
								{category.map((c) => (
									<option key={c.id} value={c.id}>
										{c.name}
									</option>
								))}
							</select>
							<div className={styles.buttonContainer}>
								<Button type="submit">Додати</Button>
								<Button type="button" onClick={() => setModalProduct(false)}>
									Закрити
								</Button>
							</div>
						</form>
					</div>
				)}
			</div>
		</section>
	);
}
