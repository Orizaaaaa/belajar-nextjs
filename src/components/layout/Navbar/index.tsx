import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Navbar() {
    // mengambil data login user dari session
    const { data }: any = useSession()
    console.log(data);


    return (
        <div className='navbar flex justify-between'>
            <div> Navbar</div>

            <div className="full-name">
                {data ? data.user.fullName : "Guest"}
            </div>
            <div className='flex gap-1.5' >
                {data?.user?.image && (
                    <img className='rounded-full w-7 h-7 ' src={data.user.image} />
                )}
                {data ? (
                    <button onClick={() => signOut()} >SiGN OUT</button>
                ) : (
                    <button onClick={() => signIn()} >SiGN IN</button>
                )
                }
            </div>

        </div>
    )
}

export default Navbar