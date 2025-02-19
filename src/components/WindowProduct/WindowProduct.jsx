"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import PopupWindow from "../PopupWindow/PopupWindow";
import styles from "./WindowProduct.module.css";
import { fetchCategories } from "@/services/categoryService";
import { createProduct } from "@/services/productService";

export default function WindowProduct({ isOpen, openModal, closeModal }) {
	const [category, setCategory] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		price: "",
		imageUrl: "",
		categoryId: "",
	});

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const data = await fetchCategories();
				setCategory(data);
			} catch (error) {
				console.error("Fetch error:", error);
			}
		};

		fetchCategory();
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Валідація
		if (
			!formData.name ||
			!formData.description ||
			!formData.price ||
			!formData.imageUrl ||
			!formData.categoryId
		) {
			alert("Заповніть всі обов’язкові поля!");
			return;
		}

		if (isNaN(parseFloat(formData.price))) {
			alert("Ціна має бути числом!");
			return;
		}

		try {
			await createProduct(formData);
			alert("Продукт додано!");
			closeModal();
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

	if (!isOpen) {
		return <Button onClick={openModal}>Додати Продукт</Button>;
	}

	return (
		<div className={styles.popup}>
			<h3>Додати Продукт</h3>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.input_name}
					type="text"
					name="name"
					placeholder="Введіть назву"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					className={styles.input_description}
					type="text"
					name="description"
					placeholder="Введіть опис"
					value={formData.description}
					onChange={handleChange}
				/>
				<input
					className={styles.input_price}
					type="text"
					name="price"
					placeholder="Введіть ціну"
					value={formData.price}
					onChange={handleChange}
					required
				/>
				<input
					className={styles.input_url}
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
					<Button type="button" onClick={closeModal}>
						Закрити
					</Button>
				</div>
			</form>
		</div>
	);
}
