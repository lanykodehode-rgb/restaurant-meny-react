function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <article>
      <p>{kategori}</p>
      <h2>{tittel}</h2>
      <p>{ingredienser}</p>
      <strong>{pris}</strong>
    </article>
  )
}

export default Dish