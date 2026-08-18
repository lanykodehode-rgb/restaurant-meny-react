import Dish from './Dish'
import styles from './Menu.module.css'

function Menu({ meny }) {
  return (
    <main className={styles.menu}>
      {meny.map((rett) => (
        <Dish
          key={rett.id}
          tittel={rett.tittel}
          pris={rett.pris}
          ingredienser={rett.ingredienser}
          kategori={rett.kategori}
        />
      ))}
    </main>
  )
}

export default Menu