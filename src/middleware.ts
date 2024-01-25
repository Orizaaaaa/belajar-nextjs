import { NextRequest, NextResponse } from "next/server"
import withAuth from "./middlewares/withAuth"

export const mainMiddleware = (req: NextRequest) => {
    const res = NextResponse.next()
    return res
}

export default withAuth(mainMiddleware, ['/profile', '/admin'])