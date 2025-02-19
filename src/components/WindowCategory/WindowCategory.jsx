"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./WindowCategory.module.css";
import { createCategory } from "@/services/categoryService";

export default function WindowCategory({ isOpen, openModal, closeModal }) {
	const [modalCategory, setModalCategory] = useState(false);
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(false);

	const handleAddCategory = async () => {
		if (!category.trim()) {
			alert("Заповніть поле категорії!");
			return;
		}

		setLoading(true);
		try {
			await createCategory(category);
			alert("Категорія додано!");
			setModalCategory(false);
		} catch (error) {
			alert("Помилка при додаванні продукту!");
		} finally {
			setCategory("");
			setLoading(false);
		}
	};

	if (!isOpen) {
		return <Button onClick={openModal}>Додати Категорію</Button>;
	}

	return (
		<div className={styles.popup}>
			<h3>Додати Категорію</h3>
			<input
				type="text"
				placeholder="Введіть назву категорії"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				disabled={loading}
			/>
			<div className={styles.buttonContainer}>
				<Button onClick={handleAddCategory} disabled={loading}>
					{loading ? "Додається..." : "Додати"}
				</Button>
				<Button
					onClick={closeModal}
					disabled={loading}
				>
					Закрити
				</Button>
			</div>
		</div>
	);
}
