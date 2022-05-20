import React from 'react'

const Completed = ({completedlist}) => {
    console.log(completedlist,"in completed List")
  return (
    <>
        <div style={{border:"2px solid black",padding:"10px",width:"300px",margin:"auto",marginTop:"20px"}}>
          <h1>Completed List</h1>
            {completedlist.map((item)=>(
              <div key={item.id} style={{border:"1px solid blue",marginBottom:"10px",display:"flex",padding:"10px"}}>
                <p style={{margin:"0px 20px",marginTop:"16px"}}><b>{item.value}</b></p> 
                <p>Completed 🗸</p>
              </div>
            ))}
        </div>
    </>
  )
}

export default Completed