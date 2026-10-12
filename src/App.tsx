import { useState } from 'react'
import { Fejlec } from './components/Fejlec'
import './App.css'
import { ReactKapcsolo } from './components/ReactKapcsolo';
import { Lablec } from './components/Lablec';
import { ColorChanger } from './components/ColorChanger';


function App() {
  const [text, setText] = useState<string>("Serpenyő");
  const [items, setItems] = useState<string[]>([]);
  function addItem() {
    if (text) {
      setItems( [...items, text] );
      setText("");
    }
  }
  return (
    <>
      {/* <ButtonValue/>
      <ButtonValue/>
      <ButtonValue/> <br />
      <input type="text" placeholder='Neved ide' value={text} onChange={(e) => setText(e.target.value)}/>
      <p>Név: {text}</p>
      <p>{text.length}</p>
      <button onClick={ addItem }>Felvesz</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      <Fejlec title='Kapcsoló'/>
      <ReactKapcsolo/>
      <Fejlec title='Color Changer'/>
      <ColorChanger/>
      <Fejlec title='Szövegfüggvények'/>
      <Lablec/>
    </>
  )
}

export default App


function ButtonValue() {
  let [count, setCount] = useState<number>(0);
  return <>
    <p>{count}</p>
      <button onClick={ () => setCount(count => count+1) }>Hozzáadás</button>
  </>
}