import Link from 'next/link'
import Router from 'next/router'
import styles from './Login.module.css'
const LoginViews = () => {
    const handleLogin = () => {
        Router.push('/product')
    }
    return (
        <div className={styles.login}>
            <h3 className='text-xl p-5 ' >login Page</h3>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:decoration-blue-400' onClick={handleLogin}>klik</button>
            <p>belum punya akun ? <Link href="/auth/register">register</Link> </p>
        </div >
    )
}
export default LoginViews