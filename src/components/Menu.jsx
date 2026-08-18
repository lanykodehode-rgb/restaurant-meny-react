import Dish from './Dish'

function Menu({ meny }) {
  return (
    <main>
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