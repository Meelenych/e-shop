import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = `https://fakestoreapi.com/products/`;

// export const productsAll = () => {

// 	const res = axios.get().catch((error) => console.log(error));
// 	return res;
// 	// toast.error("Goods not loaded");
// };

export async function makeGetRequest() {
	let res = await axios.get();
	let data = res.data;
	console.log(data);
	return data;
}

// makeGetRequest();
