import CardProductList from "@/components/CardProductList/CardProductList";
import styles from "./page.module.css";

export default function Index() {
	return (
		<main className={styles.main}>
      <h1 className={styles.h1}>Магазин</h1>
			<div className={styles.div}>
				<CardProductList />
			</div>
		</main>
	);
}
