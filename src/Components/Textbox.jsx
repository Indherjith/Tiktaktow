import React from 'react'

const Textbox = ({gettinginput}) => {
    const [input,setInput] = React.useState("");
  return (
      <>
        <div>
            <input type="text" placeholder='+ Add a To-Do' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>gettinginput(input)}>Add(+)</button>
        </div>
      </>
    
  )
}

export default Textbox