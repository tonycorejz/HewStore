import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

const options = {
  providers : [
    Providers.Credentials({
      id: 'uuid',
      name: "uuid",
      credentials: {
        uuid: { label: "Login", type: "text", placeholder: "" },
        password: { label: "Password", type: "password", placeholder: '********' }
      },
      authorize: async (v) => {
        /* debugger; */
        console.log("[AUTH] : CALL");
        console.log(v);

        if (v.uuid === 'roflmao' && v.password === '2486'){
            return Promise.resolve({username : v.uuid, password: "2486", name: v.uuid});
        }
        return Promise.resolve(null);
    }
    }),
  ],
  pages : {
    signIn: "/admin/login",
  },
  session: {
    jwt: true,
  }
}

export default (req, res) => NextAuth(req, res, options);