import styles from './Dish.module.css'

function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <article className={styles.card}>
      <p className={styles.category}>{kategori}</p>
      <h2 className={styles.title}>{tittel}</h2>
      <p className={styles.ingredients}>{ingredienser}</p>
      <strong className={styles.price}>{pris}</strong>
    </article>
  )
}

export default Dish