import React from 'react'

const Listmaker = ({list,complete}) => {
    // console.log(list,"inListmaker")
  return (
    <>
        <div style={{border:"2px solid black",padding:"10px",width:"300px",margin:"auto",marginTop:"20px"}}>
          <h1>Todo List</h1>
            {list.map((item)=>(
              <div key={item.id} style={{border:"1px solid blue",marginBottom:"10px",display:"flex",padding:"10px"}}>
                <p style={{margin:"0px 20px"}}><b>{item.value}</b></p> 
                <button onClick={()=>complete(item.id)}>Completed</button>
              </div>
            ))}
        </div>
    </>    
  )
}

export default Listmaker