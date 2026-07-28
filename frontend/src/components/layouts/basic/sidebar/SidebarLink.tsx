import { useContext } from "react";
import { NavLink } from "react-router";
import { LayoutContext } from "../BasicLayout";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface SidebarLinkProps {
	title: string;
	icon: IconName;
	to: string;
}

const SidebarLink = ({
	title,
	icon,
	to,
}: SidebarLinkProps): React.JSX.Element => {
	const { sidebarExpanded } = useContext(LayoutContext);

	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				(isActive ? "active" : "") +
				`${sidebarExpanded ? " expanded" : ""} sidebar-link`
			}
		>
			<DynamicIcon
				name={icon}
				size={18}
				className="min-w-4.5"
			></DynamicIcon>
			<span className={`sidebar-link-title`}>{title}</span>
		</NavLink>
	);
};

export default SidebarLink;
