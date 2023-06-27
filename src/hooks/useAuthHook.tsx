"use client";
import { pb } from "@/lib/pocketbase";
import { useState } from "react";

interface IAuthHook {
  user: any | null;
  login: () => void;
  logout: () => void;
}

export const UseAuthHook = (): IAuthHook => {
  const [user, setUser] = useState<any | null>(null);

  const login = async () => {
    const authData = await pb.authWithOAuth2("users", { provider: "github" });
    if (!authData) return;
    setUser(pb.client.authStore.model);
  };

  const logout = async () => {
    pb.client.authStore.clear();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};
