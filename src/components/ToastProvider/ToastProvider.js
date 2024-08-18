import React from "react";
import useKeyDown from "../../hooks/useKeyDown";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const addToast = React.useCallback(
		(variant, message) => {
			setToasts([
				...toasts,
				{
					variant,
					message,
					id: crypto.randomUUID(),
				},
			]);
		},
		[toasts],
	);

	const handleDismiss = React.useCallback(
		(id) => {
			setToasts(toasts.filter((toast) => toast.id !== id));
		},
		[toasts],
	);

	const handleEscape = React.useCallback(() => {
		setToasts([]);
	}, []);

	useKeyDown("Escape", handleEscape);

	return (
		<ToastContext.Provider value={{ toasts, addToast, handleDismiss }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
