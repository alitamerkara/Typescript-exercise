import React, { useState } from 'react'
import Todo from './Todo';
import {arrays} from "./Type"


type State= {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}


const Input:React.FC<State> = ({todo,setTodo}) => {
    const [value, setValue]= useState<arrays[]>([])
    const addTodo=()=>{
        setValue([...value,{
            name:todo,
            id:value.length+1
        }])
        setTodo("")
       
    }
    const deleteItem = (id:number)=>{
        setValue(value.filter((item)=>item.id != id
        ))    
        }
    
  return (
    <div>
        <input type="text" placeholder='yazınız' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button onClick={addTodo}>Ekle</button>
        <Todo value={value} deleteItem={deleteItem}/>
    </div>
  )
}

export default Input