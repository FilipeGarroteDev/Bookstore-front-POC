import { Navigate } from "react-router-dom";

export default function PrivatePage({ children }) {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to="/sign-up" />;
	}

	return <>{children}</>;
}
