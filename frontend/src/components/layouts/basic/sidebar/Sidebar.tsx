import { useContext } from "react";
import { LayoutContext } from "../BasicLayout";
import SidebarLink from "./SidebarLink";
import IconButton from "../../../IconButton";
import { DynamicIcon } from "lucide-react/dynamic";
import { UserContext } from "../../../../features/user/providers/UserProvider";

const Sidebar = (): React.JSX.Element => {
	const { sidebarExpanded, toggleSidebar } = useContext(LayoutContext);

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

					<button
						className={`${sidebarExpanded ? " expanded" : ""} sidebar-link`}
						onClick={() => logout?.()}
					>
						<DynamicIcon
							name={"log-out"}
							size={18}
							strokeWidth={1.75}
							className="min-w-4.5"
						></DynamicIcon>
						<span
							className={`sidebar-link-title w-full text-start`}
						>
							Logout
						</span>
					</button>
				</>
			)}
		</div>
	);
};

export default Sidebar;
