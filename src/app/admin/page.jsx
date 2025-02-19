"use client";

import { useState } from "react";
import WindowCategory from "@/components/WindowCategory/WindowCategory";
import WindowProduct from "@/components/WindowProduct/WindowProduct";
import styles from "./page.module.css";
import TablePorduct from "@/components/TableProducts/TableProducts";

export default function Index() {
	const [activeModal, setActiveModal] = useState(null);

	const openModal = (modal) => {
		if (!activeModal) {
			setActiveModal(modal);
		}
	};

	const closeModal = () => {
		setActiveModal(null);
	};

	return (
		<section className={styles.section}>
			<div className={styles.div_left}>
				<h1 className={styles.h1}>Admin Panel</h1>
				<WindowProduct
					isOpen={activeModal === "product"}
					openModal={() => openModal("product")}
					closeModal={closeModal}
				/>
				<WindowCategory
					isOpen={activeModal === "category"}
					openModal={() => openModal("category")}
					closeModal={closeModal}
				/>
			</div>
			<div className={styles.div_right}>
				<TablePorduct />
			</div>
		</section>
	);
}
