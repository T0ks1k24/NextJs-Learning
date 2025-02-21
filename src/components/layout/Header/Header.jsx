"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

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
				<h2>NextJs-Learning</h2>
				<span className={styles.span}>{time}</span>
			</div>
		</header>
	);
}
