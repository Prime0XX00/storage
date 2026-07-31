import { useContext } from "react";
import { LayoutContext } from "../BasicLayout";
import SidebarLink from "./SidebarLink";
import IconButton from "../../../IconButton";
import { UserContext } from "../../../../features/user/providers/UserProvider";
import SidebarButton from "./SidebarButton";

const Sidebar = (): React.JSX.Element => {
	const { toggleSidebar } = useContext(LayoutContext);

	const { user, logout } = useContext(UserContext) ?? {};

	return (
		<div className={`sidebar`}>
			<IconButton
				icon="menu"
				onClick={() => toggleSidebar?.()}
			></IconButton>

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

			<SidebarLink
				icon={"settings"}
				title="Settings"
				to="settings"
			></SidebarLink>

			{user && (
				<>
					<div className="border-t border-main-border w-full"></div>

					<SidebarLink
						icon={"user-circle"}
						title={user.username}
						to="profile"
					></SidebarLink>

					<SidebarButton
						onClick={() => logout?.()}
						icon="log-out"
						title="Logout"
					></SidebarButton>
				</>
			)}
		</div>
	);
};

export default Sidebar;
