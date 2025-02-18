import styles from "./Button.module.css"

export default function Button({ children, isActive, ...props }) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}
