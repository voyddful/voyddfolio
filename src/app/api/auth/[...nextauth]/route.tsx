import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
