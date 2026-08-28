import { use, useState } from 'react';
import './App.css'; 
import Viewer from './components/Viewer';
import Controller from './components/Contoller';

function App() {
  const [count, setCount] = useState(0);
  const handleInc = (value) => {
    setCount(count+value);
  }
    return(
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
          <Viewer count = {count}/>
        </section>
        <section>
          <Controller handleInc = {handleInc}/>
        </section>
      </div>
    )
}

export default App
