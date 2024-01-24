import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Navbar() {
    const { data }: any = useSession()

    return (
        <div className='navbar flex justify-between'>
            <div> Navbar</div>
            <div className="full-name">
                {data ? data.user.fullName : "Guest"}
            </div>
            {data ? (
                <button onClick={() => signOut()} >SiGN OUT</button>
            ) : (
                <button onClick={() => signIn()} >SiGN IN</button>
            )
            }
        </div>
    )
}

export default Navbar