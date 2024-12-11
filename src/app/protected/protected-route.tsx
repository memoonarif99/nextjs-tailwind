import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@app/hooks/use-auth";
import { useUser } from "@auth0/nextjs-auth0/client";
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const router = useRouter();
  const { user, isLoading } = useUser();
  console.log("user", user);

  useEffect(() => {
    setTimeout(() => {
      if (!user && !isLoading) {
        router.push("/api/auth/login");
      }
    }, 1000);
  }, [user, isLoading]);

  if (!user && !isLoading) {
    return null;
  }

  return <>{children}</>;
};
