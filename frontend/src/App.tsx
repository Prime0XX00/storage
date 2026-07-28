import { Route, Routes } from "react-router";
import BasicLayout from "./components/layouts/basic/BasicLayout";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<BasicLayout />}
				>
					<Route
						index
						element={<></>}
					/>
					<Route
						path="users"
						element={<></>}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
