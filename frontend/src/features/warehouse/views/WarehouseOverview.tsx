import { useQuery } from "@tanstack/react-query";

const WarehouseOverview = (): React.JSX.Element => {
	const query = useQuery({
		queryKey: ["warehouses"],
		queryFn: async () => {
			const res = await fetch("http://localhost:3000/api/warehouse/");
			const json = await res.json();
			return json;
		},
	});

	return <>{JSON.stringify(query.data)}</>;
};

export default WarehouseOverview;
