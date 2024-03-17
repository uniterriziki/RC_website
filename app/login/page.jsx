import { auth, signIn, signOut } from "auth";

//using an async function as it will be checking things on the server
async function login() {
  const session = await auth;
  return (
    <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-2">
      {/* CHECK IF THE SESSION EXISTS AND IF IT HAS A USER IN IT */}
      <div className="ml-auto">
        {session && session.user ? (
          <div>
            {/* case 1, if session and user exist, return username and sign out is a server component here*/}
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default login;
