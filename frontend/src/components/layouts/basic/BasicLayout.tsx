import { createContext, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router";

type BasicLayoutProps = {};

type LayoutContextProps = {
	sidebarExpanded?: boolean;
	toggleSidebar?: () => void;
};

export const LayoutContext = createContext<LayoutContextProps>({});

const BasicLayout = ({}: BasicLayoutProps): React.JSX.Element => {
	const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);

	const toggleSidebar = () => {
		setSidebarExpanded((prev) => !prev);
	};

	const layoutContextValue = {
		sidebarExpanded: sidebarExpanded,
		toggleSidebar: toggleSidebar,
	};

	return (
		<LayoutContext.Provider value={layoutContextValue}>
			<div className="flex flex-row h-full w-full">
				<Sidebar />
				<div className="p-5 w-full">
					<Outlet />
				</div>
			</div>
		</LayoutContext.Provider>
	);
};

export default BasicLayout;
