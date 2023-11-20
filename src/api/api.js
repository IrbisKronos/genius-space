import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

export const getContactList = async () => {
	const contacts = await axios.get("contacts");
	return contacts.data;
};
