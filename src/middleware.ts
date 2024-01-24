import { NextRequest, NextResponse } from "next/server"

export const middleware = (req: NextRequest) => {
    const isLogin = true
    if (isLogin) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/", req.url))
    }
}

export const config = {
    matcher: ["/product", "/product/:product_id"],
}