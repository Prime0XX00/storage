import { createContext, useState } from "react";
import type { LoginData, User } from "../types";
import loginUserService from "../services/loginUser";
import { useNavigate } from "react-router";

type UserContextProps = {
	user: User | undefined;
	login: (user: LoginData) => void;
	logout: () => void;
};

export const UserContext = createContext<UserContextProps | null>(null);

type UserProviderProps = {
	children?: React.ReactElement;
};

const UserProvider = ({ children }: UserProviderProps): React.JSX.Element => {
	const navigate = useNavigate();

	const [user, setUser] = useState<User>();

	const login = async (loginData: LoginData) => {
		const { username, password } = loginData;
		if (username == "" || password == "") return;

		const user = await loginUserService(loginData);

		if (user) {
			setUser(user);
			navigate("/");
		}
	};

	const logout = () => {
		// call BE
		setUser(undefined);
		navigate("login");
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
