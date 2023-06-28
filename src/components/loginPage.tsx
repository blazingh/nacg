"use client";

import { UseAuthHook } from "@/hooks/useAuthHook";

export function LoginPage() {
  const { user, login, logout } = UseAuthHook();

  return (
    <div className="flex flex-col items-center justify-center">
      {user && <pre className="text-xs">{JSON.stringify(user, null, 2)}</pre>}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
