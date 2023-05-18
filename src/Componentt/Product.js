import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product() {
    const [data, setData] = useState([])

    const getItem = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((response) => setData(response.products))
    }
    useEffect(() => {
        getItem()

    }, [])
    return (
        <div>
            <div className='cont'>
                {
                    data.map((ele) => {
                        return <>
                            <div className='card' >
                                <img src={ele.images} alt={ele.title} />
                                <div>
                                    <h3>{ele.title}</h3>
                                    <h3> {ele.id}</h3>
                                </div>

                                <div>
                                    <Link to={`/products/${ele.id}`}> Buy Now</Link>
                                </div>
                            </div>

                        </>

                    })

                }

            </div>


        </div>
    )
}

export default Product
