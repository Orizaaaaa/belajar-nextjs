import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/swr';
import DetailProduct from '@/views/DetailProduct';

function DetailProductPage() {
    const { query } = useRouter()

    const { data, error, isLoading } = useSWR(
        `/api/product/${query.product_id}`,
        fetcher
    );

    return (
        <div>
            <h1>DetailProductPage</h1>
            <DetailProduct product={isLoading ? [] : data.data} />
        </div>

    )
}

export default DetailProductPage