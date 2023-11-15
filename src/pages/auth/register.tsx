import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <h3>Register</h3>
            <p>sudah punya akun? <Link href="/auth/login">login</Link></p>
        </div>
    )
}

export default RegisterPage