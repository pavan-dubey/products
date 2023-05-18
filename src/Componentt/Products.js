import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Products() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getproduct = async () => {
            setloading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProducts(await response.json())
            setloading(false)
        }
        getproduct()
    }, [])
    const Loading = () => {
        return <>
            Loading...

        </>
    }
    const ShowProduct = () => {
        return <>
            <div>
                <div className='card' >
                    <img src={products.image} alt={products.title} />
                    <div>
                        <h3>{products.title}</h3>
                        <p>${products.price}</p>
                        <p>{products.category}</p>

                        <h4>{products.description}</h4>
                    </div>
                   


                </div>
            </div>

        </>
    }
    return (
        <div>
            <div>
                {loading ? <Loading /> : <ShowProduct />}
            </div>

        </div>
    )
}

export default Products
