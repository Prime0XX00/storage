const getAllWarehouses = async () => {
	const res = await fetch("http://localhost:3000/api/warehouse/");
	const json = await res.json();
	return json;
};

export default getAllWarehouses;
