import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carousel from './components/Carousel'
import Botones from './components/Botones'


  function App() {
    return (
      <>
        <NavBar/>
        <hr />
        <Carousel/>
        <ItemListContainer/>
        <Botones/>
      </>
    )
  }
  export default App
