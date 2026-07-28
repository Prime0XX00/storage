import { useContext } from "react";
import { LayoutContext } from "../BasicLayout";
import { MenuIcon } from "lucide-react";
import SidebarLink from "./SidebarLink";

const Sidebar = (): React.JSX.Element => {
	const { toggleSidebar } = useContext(LayoutContext);

	return (
		<div className={`sidebar`}>
			<button
				onClick={() => toggleSidebar?.()}
				className="hover:bg-main-hover active:bg-main-active bg-main cursor-pointer rounded-full size-element-height flex items-center justify-center"
			>
				<MenuIcon size={18}></MenuIcon>
			</button>

			<div className="border-t border-main-border w-full"></div>

			<SidebarLink
				icon={"home"}
				title="Dashboard"
				to=""
			></SidebarLink>

			<SidebarLink
				icon={"warehouse"}
				title="Warehouses"
				to="warehouses"
			></SidebarLink>

			<SidebarLink
				icon={"user"}
				title="Users"
				to="users"
			></SidebarLink>
		</div>
	);
};

export default Sidebar;
