import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";
function App() {
  return (
    <>
  <NavBar/>
  <ItemListContainer greeting="Hello world"/>
    </>
  );
}

export default App;