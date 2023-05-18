import React, { useEffect, useState } from 'react'
import './Home.css'
import Container from './Container'

function Home() {
  const [data, setItem] = useState([])

  const allProduct = () => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((ress) => setItem(ress))
  }
  useEffect(() => {
    allProduct()
  }, [])
  return (
    <div>
      <div>
        <div className='img_cont'>
          <img src='\hero4.png' alt='Hero' />
        </div>
        <div className='cartt'>
          {
            data.map((elee) => {
              return <>
                <div className='container'>
                  <img src={elee.image} alt={elee.title}
                    width="200px" height="200px" />
                  <h3>{elee.title.substring(0, 15)}</h3>
                </div>
              </>
            })
          }
        </div>
        <Container />


      </div>




    </div>
  )
}

export default Home
