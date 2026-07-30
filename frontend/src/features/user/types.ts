export type User = {
	id: number;
	first_name: string;
	last_name: string;
	username: string;
	password?: string;
};

export type LoginData = {
	username: string;
	password: string;
};
