"use client";

import { useState } from "react";
import styles from "./MenuBar.module.scss";

export default function MenuBar() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleMenu = () => {
		setIsOpen((prev) => {
			const newState = !prev;
			localStorage.setItem("menuOpen", newState);
			return newState;
		});
	};

	return (
		<section
			className={`${styles.menuBar} ${
				isOpen ? styles.open : styles.closed
			}`}
		>
			<button className={styles.toggleButton} onClick={toggleMenu}>
				&#9776;
			</button>
			{isOpen && (
				<ul>
					<li>
						<a href="/">Головна</a>
					</li>
					<li>
						<a href="/store">Магазин</a>
					</li>
					<li>
						<a href="/about">Про нас</a>
					</li>
					<li>
						<a href="/services">Послуги</a>
					</li>
					<li>
						<a href="/contact">Контакти</a>
					</li>
					<li>
						<a href="/admin">Адмінка</a>
					</li>
				</ul>
			)}
		</section>
	);
}
