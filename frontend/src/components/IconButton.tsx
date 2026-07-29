import { DynamicIcon, type IconName } from "lucide-react/dynamic";

type IconButtonProps = {
	icon: IconName;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
	icon,
	onClick,
	disabled,
}: IconButtonProps): React.JSX.Element => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="hover:bg-element-hover active:bg-element-active bg-element-bg cursor-pointer rounded-full size-element-height flex items-center justify-center"
		>
			<DynamicIcon
				name={icon}
				size={18}
			></DynamicIcon>
		</button>
	);
};

export default IconButton;
