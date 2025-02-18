import CardProduct from "@/components/CardProduct/CardProduct";
import styles from "./page.module.css";

export default function Index() {
	return (
		<main className={styles.main}>
      <h1>Магазин</h1>
      <CardProduct />
		</main>
	);
}
