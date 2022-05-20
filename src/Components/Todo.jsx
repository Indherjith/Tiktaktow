import React from 'react'
import Listmaker from './Listmaker'
import Textbox from "./Textbox"
import { useState } from 'react'
import Completed from './Completed'

const Todo = () => {
    const [list,setlist]=React.useState([]);
    const [completedlist,setcompletedlist]=React.useState([]);
    const gettinginput=(input)=>{
        // console.log(list,"before")
        let pody = {value:input,id:Date.now(),}
        list.push(pody);
        setlist([...list]);
        // console.log(list,"after")
    }

    const complete=(id)=>{
      let newtodo = list.filter((item)=> item.id == id)
      let newdoc = {value:newtodo[0].value,id:newtodo[0].id}
      completedlist.push(newdoc)
      setcompletedlist([...completedlist])
      deletes(id);
    }

    const deletes=(id)=>{
      let newlist = list.filter((item)=> item.id !== id)
      setlist(newlist);
    }
  return (
      <>
        <div style={{marginTop:"20px"}}>
            <Textbox gettinginput={gettinginput} />
            <Listmaker list={[...list]} complete={complete} />
            <Completed completedlist={[...completedlist]}/>
        </div>
      </>
    
  )
}

export default Todo