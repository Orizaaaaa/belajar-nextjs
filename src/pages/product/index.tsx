import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductView from '@/views/Product';

function ProductPage() {
    const [login, setLogin] = useState(true)
    const [products, setProducts] = useState([])
    const { push } = useRouter()

    useEffect(() => {
        if (!login) {
            push('/auth/login')
        }
    }, []);

    useEffect(() => {
        fetch('api/products')
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data)
            })
    }, []);

    return (
        <ProductView products={products} />
    )
}

export default ProductPage