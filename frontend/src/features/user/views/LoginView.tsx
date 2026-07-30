import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { DynamicIcon } from "lucide-react/dynamic";

const LoginView = (): React.JSX.Element => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { login } = useContext(UserContext) ?? {};

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-slate-100">
			<div className="w-80 bg-main py-5 border border-main-border rounded-md flex flex-col gap-y-5">
				<p className="text-center w-full text-2xl">Storage Login</p>
				<div className="border-t border-main-border w-full"></div>
				<div className="flex flex-col gap-y-2 px-5">
					<input
						className="border border-main-border rounded-md h-element-height px-2"
						name="username"
						placeholder="Username..."
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					></input>
					<input
						className="border border-main-border rounded-md h-element-height px-2"
						name="password"
						placeholder="Password..."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					></input>
				</div>
				<div className="border-t border-main-border w-full"></div>
				<button
					className="mx-5 bg-slate-700 text-slate-200 rounded-md h-element-height px-2 cursor-pointer hover:bg-slate-800 flex items-center justify-center gap-x-2"
					onClick={() => login?.({ username, password })}
				>
					<DynamicIcon
						name={"log-in"}
						size={18}
						strokeWidth={1.75}
						className="min-w-4.5"
					></DynamicIcon>
					<span>Login</span>
				</button>
			</div>
		</div>
	);
};
export default LoginView;
