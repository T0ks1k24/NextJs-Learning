"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString("uk-UA", { hour12: false }));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<header>
			<div className={styles.div}>
				<Image
					className={styles.img}
					src="/logo.svg"
					alt="logo"
					width={55}
					height={55}
				/>
				<Link className={styles.link} href="/">Головна</Link>
				<Link className={styles.link} href="/store">Магазин</Link>
				<Link className={styles.link} href="/">Картинки</Link>
				<Link className={styles.link} href="/">Зворотній зв'язок</Link>
				<span className={styles.span}>{time}</span>
			</div>
		</header>
	);
}
