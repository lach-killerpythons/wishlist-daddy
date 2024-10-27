import logo from './logo.svg';
import './App.css';
import Heading from './heading';
import Listbuild from './listbuild';
import Listadd from './listadd'
import ListDelete from './listdelete';
//<Listbuild/>
import Flexy from './flexyboi';



function App() {
  return (
    <>
  
    <Heading myText = "Lachlan's Wishlist"/>
    <Listadd/>

    <Listbuild/>

    <ListDelete id="fc3c"/>


    </>

  );
}

export default App;
