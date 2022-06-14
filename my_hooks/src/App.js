import { useRef } from 'react';
import './App.css';
import Hover from './components/hover';
import useInput from './hooks/useInput';


function App() {

  // const username = useInput('')
  // const password = useInput('')

  return (
    <div className="App">
      {/* <input {...username} type="text" placeholder='username'></input>
      <input {...password} type="password" placeholder='password'></input>
      <button onClick={() => { console.log(username.value, password.value) }}>Click</button> */}
      <Hover />
    </div>
  );
}

export default App;
