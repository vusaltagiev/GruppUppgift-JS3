import {useState, useEffect} from 'react'
import Details from './pages/Details'

const App = () => {

  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const res = await fetch('http://localhost:7000/api/products')
        const data = await res.json()
        setProducts(data)

      } catch(error){
        console.error(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      {products.map((product) => (
        <Details
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        image2={product.image2}
        image3={product.image3}
        image4={product.image4}
        description={product.description}
        category={product.category}
        price={product.price}
        product={product}

        />

      ))}
    </div>
  )
}

export default App
