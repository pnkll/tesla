import { Parser } from './parser/parser'
import axios from 'axios';

function App() {

  const start = async () =>{
     const response = await axios.get('https://teslahelp.ru/catalog/model-3-parts-catalog/')
     console.log(response)
  }

  return (
    <div className="App">
      <header className="App-header">
        Tesla catalog
        <button onClick={start()}>Hello</button>
      </header>
    </div>
  );
}

export default App;
