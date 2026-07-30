import { Route, Routes } from "react-router";
import BasicLayout from "./components/layouts/basic/BasicLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WarehouseOverview from "./features/warehouse/views/WarehouseOverview";
import UserProvider from "./features/user/providers/UserProvider";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<UserProvider>
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
								path="warehouses"
								element={
									<WarehouseOverview></WarehouseOverview>
								}
							/>
							<Route
								path="users"
								element={<></>}
							/>
							<Route
								path="*"
								element={<></>}
							></Route>
						</Route>
					</Routes>
				</UserProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
