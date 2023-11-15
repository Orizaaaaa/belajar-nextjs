import { useRouter } from 'next/router'
const ShopPage = () => {
    const { query } = useRouter()
    console.log(query);

    return (
        <div>
            <h1>ShopPage</h1>
            <p>shop : {query.slug ? query.slug[0] : ''} - {query.slug ? query.slug[1] : ''} </p>
        </div>

    )
}

export default ShopPage