import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'credentials',
            credentials: {
                fullName: { label: "fullName", type: "text" },
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password, fullName } = credentials as { email: string, password: string, fullName: string }
                const user: any = { id: 1, email: email, password: password, fullName: fullName }
                if (user) {
                    console.log(user);
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt({ token, account, profile, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email
                token.fullName = user.fullName
            }
            return token


        },

        async session({ session, token }: any) {
            if ('email' in token) {
                session.user.email = token.email

            }

            if ('fullName' in token) {
                session.user.fullName = token.fullName
            }
            return session
        }
    }
}

export default nextAuth(authOption)
