import styles from "./Footer.module.scss";
import { Container } from "../Container/Container";

export const Footer = () => {
	return (
		<footer>
			<Container>
				<address>
					<ul className={styles.footerAddress}>
						<li>Park Avenue 1553</li>
						<li>New York</li>
						<li>
							<a href="tel: +13543563339985">+13543563339985</a>
						</li>
						<li>
							<a href="mailto: eeshop@electronics.com">eeshop@electronics.com</a>
						</li>
						<li>
							<a href="https://www.electronics.com">www.electronics.com</a>
						</li>
					</ul>
				</address>
			</Container>
		</footer>
	);
};
