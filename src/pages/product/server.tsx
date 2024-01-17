import React from 'react'
import ProductView from '../../views/Product/index'

type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}


const ProductPage = ({ products }: { products: Props[] }) => {
    return (
        <ProductView products={products} ></ProductView>
    )
}

export default ProductPage

// di panggil saat halaman nya di buka 
export async function getServerSideProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json()
    console.log(response);

    return {
        props: {
            products: response.data
        }
    }

}