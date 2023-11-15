import React from 'react'
import { useRouter } from 'next/router'

function DetailProduct() {
    const { query } = useRouter()


    return (
        <div>
            <h1>DetailProduct</h1>
            <p>product: {query.id} </p>
        </div>

    )
}

export default DetailProduct