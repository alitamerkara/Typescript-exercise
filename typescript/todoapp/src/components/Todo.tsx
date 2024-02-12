import React from 'react'
import {arrays} from "./Type"

type props={
    value:arrays[],
    deleteItem: (id:number)=>void
}

const Todo:React.FC<props> = ({value, deleteItem}) => {
    
  return (
   <div>
    {value.map((item, index)=>{
        return <div key={index}>{item.name} - <span onClick={()=>{deleteItem(item.id)}} style={{cursor:'pointer'}}>x</span></div>
    })}
   </div>
  )
}

export default Todo