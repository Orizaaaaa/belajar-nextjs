import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const LoginPage = () => {
    const handleLogin = () => {
        Router.push('/product')
    }
    return (
        <div>
            <h3>login</h3>
            <button onClick={handleLogin}>klik</button>
            <p>belum punya akun ? <Link href="/auth/register">register</Link> </p>
        </div>
    )
}

export default LoginPage