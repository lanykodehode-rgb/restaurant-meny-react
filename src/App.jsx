import Menu from './components/Menu'
import meny from './data/menu'

function App() {
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Menu meny={meny} />
    </div>
  )
}

export default App