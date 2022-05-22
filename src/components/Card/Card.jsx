import styles from "./Card.module.scss";

export const Card = ({ products }) => {
	return (
		<>
			{products.map(
				({
					rating: { rate, count },
					image,
					category,
					title,
					description,
					price,
					id,
				}) => (
					<li key={id} className={styles.cardLine}>
						<article className={styles.card}>
							<p className={styles.cardRating}>
								rating: <span>{rate}</span> votes: <span>{count}</span>
							</p>
							<div className={styles.cardPhoto}>
								<img src={image} alt="" />
							</div>
							<p className={styles.cardCategory}>
								category: <span>{category}</span>
							</p>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardDescription}>{description}</p>
							<p className={styles.cardPrice}>
								<span>{price} USD</span>
							</p>
						</article>
					</li>
				)
			)}
		</>
	);
};
