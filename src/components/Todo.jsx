import React, { useReducer } from 'react'

const todolist=(state, action)=>{
  if ( action.type === "TEXT") {
    return{
      ...state,
      text: action.value
    }
  }
  if ( action.type === "VALUE") {
    return{
      ...state,
      text: ""
    }
  }
}
function Todo(props) {

 const[input, dispatchInput]= useReducer(todolist,{
  text: ""
 })

 const inputHadler=(el)=>{
  dispatchInput({type:"TEXT", value:el.target.value})
 }

 const addHadler=(el)=>{
  const obj = { 
    ...input,
    id: Math.random()
  }
  dispatchInput({type:"VALUE",value:el.target.value})
  props.onPut(obj)
 }


  return (
    <div>
      <h1>Todo List</h1>
       <input value={input.text} type="text" onChange={inputHadler} />
       <button onClick={addHadler}>ADD</button>
    </div>
  )
}

export default Todo
