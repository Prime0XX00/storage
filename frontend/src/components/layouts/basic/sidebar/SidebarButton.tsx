import { useContext } from "react";
import { LayoutContext } from "../BasicLayout";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface SidebarButtonProps {
	title: string;
	icon: IconName;
	onClick?: () => void;
}

const SidebarButton = ({
	title,
	icon,
	onClick,
}: SidebarButtonProps): React.JSX.Element => {
	const { sidebarExpanded } = useContext(LayoutContext);

	return (
		<button
			className={`${sidebarExpanded ? " expanded" : ""} sidebar-link`}
			onClick={onClick}
		>
			<DynamicIcon
				name={icon}
				size={18}
				strokeWidth={1.75}
				className="min-w-4.5"
			></DynamicIcon>
			<span className={`sidebar-link-title w-full text-start`}>
				{title}
			</span>
		</button>
	);
};

export default SidebarButton;
