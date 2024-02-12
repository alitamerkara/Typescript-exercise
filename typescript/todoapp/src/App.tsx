import { useState } from 'react';
import './App.css';
import Input from './components/Input';



function App() {
  const [todo, setTodo]=useState<string>("")
  
  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo}/>
      
    </div>
  );
}

export default App;
