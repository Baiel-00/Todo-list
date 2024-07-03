

import { Fragment, useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
 const[text, setText]=useState([])
 const obj=(data)=>{
  setText([...text,data])
  
 }
  return (
    <div className="App">
    <Todo onPut = {obj}/>
    {
      text.map((el)=>(
        <Fragment>
          <h1>{el.text}</h1>
        </Fragment>
      ))
    }

    </div>
  );
}

export default App;
