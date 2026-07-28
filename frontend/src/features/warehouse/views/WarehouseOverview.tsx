import { useQuery } from "@tanstack/react-query";
import getAllWarehouses from "../services/getAllWarehouses";

const WarehouseOverview = (): React.JSX.Element => {
	const query = useQuery({
		queryKey: ["warehouses"],
		queryFn: getAllWarehouses,
	});

	return <>{JSON.stringify(query.data)}</>;
};

export default WarehouseOverview;
