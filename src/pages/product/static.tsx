import ProductView from '@/views/Product'
import React from 'react'

type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}



export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json()

    return {
        props: {
            products: response.data
        }
    }
}

const ProductStaticPage = ({ products }: { products: Props[] }) => {
    return (
        <ProductView products={products} />
    )
}

export default ProductStaticPage