import { useRef, useEffect } from "react";
import styles from "./PopupWindow.module.css";

export default function PopupWindow({ children, open }) {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [open]);

	return (
		<dialog ref={dialog} className={styles.dialog}>
			{children}
		</dialog>
	);
}
