import { query } from 'firebase/firestore'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LoginViews = () => {
    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || '/'
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl
            })
            if (!res?.error) {
                push(callbackUrl)
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container mx-auto my-52' >

            <form className='w-3/6 mx-auto border border-gray-900/10 p-10 rounded-lg' onSubmit={handleSubmit} >
                <div className="space-y-12">
                    <div className=" border-gray-900/10 pb-12">
                        <h3 className='text-3xl font-semibold mb-5 ' >Login </h3>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid ">
                            <div className="w-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <button onClick={() => signIn('google', {
                                callbackUrl,
                                redirect: false
                            })} className='mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                            text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type='button'  >Sign In With Google</button>


                        </div>
                    </div>

                </div>
                <p>dont have an account ? <Link className='text-blue-500' href="/auth/register">register</Link></p>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form >
        </div >
    )
}
export default LoginViews