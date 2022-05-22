import { Container } from "../Container/Container";
import styles from "./MainContent.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card";
// import { toast } from "react-toastify";
// toast.error("Goods not loaded");

axios.defaults.baseURL = `https://fakestoreapi.com/products/`;

export const MainContent = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function makeGetRequest() {
			let res = await axios.get();
			let data = await res.data;
			setProducts(data);
		}

		makeGetRequest();
	}, []);

	return (
		<div>
			<Container>
				<section className={styles.mainSection}>
					<h2>Category</h2>
					<ul className={styles.mainSectionUl}>
						{products && <Card products={products} />}
					</ul>
				</section>
			</Container>
		</div>
	);
};
