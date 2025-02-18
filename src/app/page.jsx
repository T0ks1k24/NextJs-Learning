import CourseList from "./components/CourseList/CourseList.jsx";
import styles from "./page.module.css";

export default function Index() {
	return (
		<main className={styles.main}>
			<CourseList/>
		</main>
	);
}
