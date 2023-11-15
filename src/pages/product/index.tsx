import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function ProductPage() {
    const [login, setLogin] = useState(false)
    const { push } = useRouter()

    useEffect(() => {
        if (!login) {
            push('/auth/login')
        }
    }, []);

    return (
        <div>ProductPage</div>
    )
}

export default ProductPage