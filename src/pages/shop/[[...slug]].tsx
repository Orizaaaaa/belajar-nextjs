import { fetcher } from '@/lib/swr/swr'
import { useRouter } from 'next/router'
import useSWR from 'swr'
const ShopPage = () => {
    const { query } = useRouter()

    const { data, error, isLoading } = useSWR(`api/products/${query.product}`, fetcher)

    return (
        <div>
            <h1>ShopPage</h1>
            <p>shop : {query.slug ? query.slug[0] : ''} - {query.slug ? query.slug[1] : ''} </p>
        </div>

    )
}

export default ShopPage