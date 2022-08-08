import logo from './logo.svg';
import './App.css';
import Header, {Header2} from './components/Header';
import Navbar from './components/Navbar';
import { useState, setState } from 'react';

function App() {
  // const myArray = ["Hi, njcdnj", "bjncdnk", "jcndkdc"];

  const [myArray, setMyArray] = useState(["Hi, njcdnj", "bjncdnk", "jcndkdc"]);
  return (
    <div className="App">

      {
        myArray.map((element, id) => (<Header key={id} text={element} />))
      }

      {
        myArray.map((element, id) => (<Header2 key={id} text={element} />))
      }

      <Navbar />
    </div>
  );
}





export default App;
