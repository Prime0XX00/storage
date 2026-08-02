import { useQuery } from "@tanstack/react-query";
import getAllWarehouses from "../services/getAllWarehouses";
import IconButton from "../../../components/IconButton";
import { PlusIcon } from "lucide-react";

const WarehouseOverview = (): React.JSX.Element => {
	const query = useQuery({
		queryKey: ["warehouses"],
		queryFn: getAllWarehouses,
	});

	return (
		<>
			<div className="flex flex-col gap-y-2 w-1/2">
				<div className="flex justify-between items-center gap-x-5">
					<p className="font-semibold text-xl">Warehouses</p>
					<div className="flex gap-x-2 items-center">
						<IconButton icon="refresh-ccw"></IconButton>
						<button className="flex items-center gap-x-2 px-2 rounded-md cursor-pointer bg-slate-700 hover:bg-slate-800 active:bg-slate-900 h-element-height text-slate-200">
							<PlusIcon></PlusIcon>
							<span>Create Warehouse</span>
						</button>
					</div>
				</div>
				<table className="border-separate border-spacing-0 border border-main-border rounded-md overflow-hidden">
					<thead className="bg-slate-50">
						<tr>
							<th className="px-2 h-10 text-start font-normal">
								ID
							</th>
							<th className="px-2 h-10 text-start font-normal">
								Warehouse
							</th>
							<th className="px-2 h-10 text-start font-normal">
								Code
							</th>
							<th className="px-2 h-10 text-start font-normal">
								Aktionen
							</th>
						</tr>
					</thead>
					<tbody>
						{query.data?.map((warehouse: any, index: any) => (
							<tr key={index}>
								<td className="px-2 h-10">{warehouse.id}</td>
								<td className="px-2 h-10">{warehouse.name}</td>
								<td className="px-2 h-10">{warehouse.code}</td>
								<td className="px-2 h-10 flex items-center">
									<IconButton icon="pencil"></IconButton>
									<IconButton icon="trash-2"></IconButton>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot className="bg-slate-50">
						<tr>
							<td
								className="px-2 h-10"
								colSpan={4}
							>
								{query.data?.length} Reihen
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};

export default WarehouseOverview;
