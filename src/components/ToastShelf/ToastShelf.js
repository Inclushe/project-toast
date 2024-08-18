import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
	const { toasts, handleDismiss } = React.useContext(ToastContext);
	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toasts.map((toast) => (
				<Toast
					variant={toast.variant}
					key={toast.id}
					id={toast.id}
					handleDismiss={handleDismiss}
				>
					{toast.message}
				</Toast>
			))}
		</ol>
	);
}

export default ToastShelf;
