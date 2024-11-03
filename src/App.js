import logo from './logo.svg';
import './App.css';
import Heading from './heading';
import Listbuild from './listbuild';
import Listadd from './listadd'
import ListDelete from './listdelete';
import MockEdit from './MockEdit';
//<Listbuild/>




function App() {
  return (
    <>
  
    <Heading myText = "Lachlan's Wishlist"/>

    <MockEdit/>

    <div>
    <Listadd/>

    <Listbuild/>

    </div>


    </>

  );
}

export default App;
