import React from 'react'
import Link from 'next/link'
const LoginPage = () => {
    return (
        <div>
            <h3>login</h3>
            <p>belum punya akun ? <Link href="/auth/register">register</Link> </p>
        </div>
    )
}

export default LoginPage