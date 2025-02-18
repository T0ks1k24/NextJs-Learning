"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./WindowCategory.module.css";

export default function WindowCategory() {
	const [modalCategory, setModalCategory] = useState(false);

	return (
		<div className={styles.div_category}>
			<Button onClick={() => setModalCategory(true)}>
				Додати Категорію
			</Button>

			{modalCategory && (
				<div className={styles.popup}>
					<h3>Додати Категорію</h3>
					<input type="text" placeholder="Введіть назву категорії" />
					<div className={styles.buttonContainer}>
						<Button>Додати</Button>
						<Button onClick={() => setModalCategory(false)}>
							Закрити
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
