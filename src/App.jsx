import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

  function App() {
    return (
      <>
        <NavBar/>
        <ItemListContainer className="alert" mensaje={"Pagina en construccion. Disculpe las molestias ❌"}/>
      </>
    )
  }
  export default App
