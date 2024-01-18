import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/swr';
import DetailProduct from '@/views/DetailProduct';
type Props = {
    id: string
    name: string
    price: number
    image: string
    category: string
}
function DetailProductPage({ product }: { product: Props }) {
    const { query } = useRouter()
    // client side
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.product_id}`,
    //     fetcher
    // );

    return (

        <div>
            {/* client side */}
            {/* <h1>DetailProductPage</h1>
            <DetailProduct product={isLoading ? [] : data.data} /> */}

            {/* server side */}
            <DetailProduct product={product} />
        </div>




    )
}

export default DetailProductPage

export async function getServerSideProps({ params }: { params: { product_id: string } }) {
    console.log(params.product_id);
    const res = await fetch(`http://localhost:3000/api/product/${params.product_id}`);
    const response = await res.json();
    return {
        props: {
            product: response.data
        }
    };
}
