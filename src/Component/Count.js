import React, { useState } from 'react'

function Count() {
    const[count,setCount]=useState(10)
   
  return (
    <div>
        <div>
        <div className="Counter">
            <h3>Counter</h3>
        </div>
        <div>
            <p className="Count">{count}</p>
        </div>

        <div>
            <button className="btn-two" onClick={()=>setCount(count+1)}>Incriment</button>
            <button className="btn-two" onClick={()=>setCount(count-1)}>Decriment</button>
            <button className="btn-two" onClick={()=>setCount(0)}>Reset</button>
        </div>

        </div>
      
    </div>
  )
}

export default Count
