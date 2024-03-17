// https://nextjs.org/docs/app/building-your-application/authentication

import { authenticate } from "../../../lib/actions/authAction";

export default function Page() {
  return (
    <form action={authenticate}>
      <input
        type="email"
        name="email"
        placeholder="your email"
        required
        unique
        className="text-gray-500 border border-red-600"
      />
      <input
        type="password"
        name="password"
        placeholder="your password"
        required
        className="text-gray-500 border border-red-600"
      />
      <button
        type="submit"
        className="bg-red-200 hover:cursor-pointer shadow-lg hover:bg-red-400"
      >
        Login
      </button>
    </form>
  );
}
