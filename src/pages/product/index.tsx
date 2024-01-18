import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductView from '@/views/Product';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/swr';



function ProductPage() {
    const [login, setLogin] = useState(true)
    const [products, setProducts] = useState([])
    const { push } = useRouter()

    useEffect(() => {
        if (!login) {
            push('/auth/login')
        }
    }, []);

    const { data, error, isLoading } = useSWR('api/products', fetcher)
    console.log(data, error, isLoading);

    return (
        <ProductView products={isLoading ? [] : data.data} />
    )
}

export default ProductPage