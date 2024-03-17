import { redirect } from "next/navigation";
import { getSession, login, logout } from "../../lib/actions/authAction";

//it is a server component hence mark it async
export default async function Page() {
  //session refers to the ability to be within the application
  const session = await getSession();
  return (
    <section>
      {/* login form */}
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
      >
        <input type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      {/* logout form */}
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
