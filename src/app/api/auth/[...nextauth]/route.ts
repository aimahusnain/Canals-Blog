
import {AuthOptions} from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import NextAuth from 'next-auth/next';

const authOptions : AuthOptions = {
    providers : [
        GithubProvider({
            clientId : '6e26750467d26051c5f0',
            clientSecret : '41f373a4a66de28c2104477e15459adff6d98881'
        })
    ],
    callbacks : {
        async session({session, token} : any){
            console.log(session, token);

            session.user.name = `${session?.user?.name}_${token?.sub}`

            return session
        }
    },
    secret : 'default_secret_Key'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST}