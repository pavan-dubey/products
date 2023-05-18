import React, { useState } from 'react'
import TodoSecond from './TodoSecond'

function TodoComponent() {
    const[data,setData] =useState("")
    const[Data,SetData] =useState("")
    const[value,setValue] =useState([])

   const ChangeHandler=(e)=>{
        setData(e.target.value)   
    }
    const ChangeHandlertwo=(e)=>{
        SetData(e.target.value)
    }
    const ClickHandler =()=>{
        setValue((OldValue)=>{
            return [...OldValue,data]
        })
        setData("")

        setValue((OldValue)=>{
            return [...OldValue,Data]
        })
        SetData("")
    }
    const removebtn =(id)=>{
        setValue((OldValue)=>{
            return OldValue.filter((arr,index)=>{
                return  index!==id

            })
        })
    }
    return (
        <div>

            <div>
                <input type='text' placeholder='Add to Item' value={data} onChange={ChangeHandler}/>
                <input type='text' placeholder='Add to Item' value={Data} onChange={ChangeHandlertwo}/>
                <button onClick={ClickHandler}>Add To Item</button>
            </div>
            <ul>
                {
                    value.map((Ele,index)=>{
                        return <TodoSecond
                        text={Ele}
                        id={index} 
                        key={index}
                        removebtn={ removebtn}
                        />
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default TodoComponent
