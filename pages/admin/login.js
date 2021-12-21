import AdminHeader from "../../components/AdminHeader";
import {providers, signIn, getSession, csrfToken} from "next-auth/client";

export default function login({providers, csrfToken}) {

  return (
    <AdminHeader keywords={"Авторизация"}>
        <section className="section admin-login body-admin">
            <form method="post" action="/api/auth/signin" className="for-login">
                <h1>Авторизация</h1>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken}></input>
                <input placeholder="Логин" id="Login" name="uuid" type="text"/>
                <input placeholder="Пароль" name="password" type="password"/>
                <button>Авторизоваться</button>
            </form>
        </section>
    </AdminHeader>
  )
}


login.getInitialProps = async(context) => {
  const {req,res} = context;
  const session = await getSession({req});

  if(session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end()
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  }
}