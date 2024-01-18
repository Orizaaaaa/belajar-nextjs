import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/swr';

function DetailProduct() {
    const { query } = useRouter()

    const { data, error, isLoading } = useSWR(
        `/api/product/${query.id}`,
        fetcher
    );
    console.log(data);

    console.log(query.id);


    return (
        <div>
            <h1>DetailProduct</h1>
            <p>product: {query.id} </p>
        </div>

    )
}

export default DetailProduct