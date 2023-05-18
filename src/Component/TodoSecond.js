import React from 'react'
import './TodoSecond.css'

function TodoSecond(props) {
    const RemoveItem=()=>{
        props.removebtn(props.id)
    }
    return (
        <div>
            <div className='list-item'>
                <li>{props.text}</li>
                <button onClick={RemoveItem}>Remove Item</button>
            </div>
        </div>
    )
}

export default TodoSecond
