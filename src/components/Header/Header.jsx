import styles from "./Header.module.scss";
import { Container } from "../Container/Container";

export const Header = () => {
	return (
		<header>
			<Container>
				<h1>Electronics e-shop</h1>
				<div className={styles.headerNavigation}>
					<nav>
						<ul className={styles.headerMenu}>
							<li>
								<a href="">Computers</a>
							</li>
							<li>
								<a href="">TV sets</a>
							</li>
							<li>
								<a href="">Smartphones</a>
							</li>
							<li>
								<a href="">Tablets</a>
							</li>
							<li>
								<a href="">Earphones</a>
							</li>
							<li>
								<a href="">Sound systems</a>
							</li>
						</ul>
					</nav>
					<ul className={styles.loginRegisterBtns}>
						<li>
							<a href="">Login</a>
						</li>
						<li>
							<a href="">Register</a>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
};
