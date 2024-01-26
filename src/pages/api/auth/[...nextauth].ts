import { signIn } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


//login menggunakan next-auth
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
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string, }
                const user: any = await signIn({ email })
                if (user) {
                    // compare password yang sudah di hashing
                    const passwordConfirm = await compare(password, user.password)
                    if (passwordConfirm) {
                        return user
                    }
                    return null
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        // ngambil data token dari firebase
        jwt({ token, account, profile, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email
                token.fullName = user.fullName
                token.role = user.role
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

            if ('role' in token) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: '/auth/login',
    }

}

export default nextAuth(authOption)
