import './App.css';
import {useState} from 'react';
import Child from './components/child/child'

function App() {

  const [name, setName] = useState('')

  const handelPara = (value) => {
    setName(value)
  }

  return (
    <>
      <h1>Title : Hello</h1>
      <p>input value : {name}</p>
      <Child handelPara = {handelPara}/>
    </>
  )
}

export default App
