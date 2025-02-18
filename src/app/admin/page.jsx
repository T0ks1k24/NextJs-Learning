import WindowCategory from "@/components/WindowCategory/WindowCategory";
import WindowProduct from "@/components/WindowProduct/WindowProduct";
import styles from "./page.module.css";

export default function Index() {
	return (
		<section>
						<h1 className={styles.h1}>Admin Panel</h1>
			<WindowCategory />

			<WindowProduct />
		</section>
	);
}
