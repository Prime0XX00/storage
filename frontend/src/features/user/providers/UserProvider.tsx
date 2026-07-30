import { createContext, useState } from "react";
import type { User } from "../types";

type UserContextProps = {
	user: User | undefined;
	setUser: (user: User) => void;
};

const UserContext = createContext<UserContextProps | null>(null);

type UserProviderProps = {};

const UserProvider = ({}: UserProviderProps): React.JSX.Element => {
	const [user, setUser] = useState<User>();

	return (
		<UserContext.Provider
			value={{ user: user, setUser }}
		></UserContext.Provider>
	);
};

export default UserProvider;
