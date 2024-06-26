import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
	name: "Credentials",
	credentials: {
		username: {
			label: "Username :",
		},
		password: {
			label: "Password :",
			type: "password",
		},
	},
	async authorize(credentials) {
		if (credentials.username === "rourou" && credentials.password === "1234") {
			return {
				name: credentials.username,
			};
		} else {
			return null;
		}
	},
});
const config = {
	providers: [Google, credentialsConfig],
	callbacks: {
		authorized({ request, auth }) {
			const { pathname } = request.nextUrl;
			//check if the url is the one we want to protect
			if (pathname === "/middleware-protected") {
				//!! forces the auth to be a boolean
				return !!auth; //will check if session then auth->true
			}
			return true;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
