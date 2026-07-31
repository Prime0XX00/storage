import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../providers/UserProvider";

type AuthRouteProps = {
	children?: React.ReactNode;
};

const AuthRoute = ({
	children,
}: AuthRouteProps): React.JSX.Element | undefined => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useContext(UserContext) ?? {};

	useEffect(() => {
		if (!user) {
			navigate("login");
		}
	}, [location.pathname]);

	if (user) return <>{children}</>;
};

export default AuthRoute;
