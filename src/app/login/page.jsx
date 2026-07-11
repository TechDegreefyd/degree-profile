"use client";

import { useRouter } from "next/navigation";
import App from "./App";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    document.cookie = "isLoggedIn=true; path=/; max-age=86400";
    router.push("/dashboard");
  };

  return <App onLoginSuccess={handleLoginSuccess} />;
}