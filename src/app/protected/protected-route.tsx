import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@app/hooks/use-auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isInitialized]);

  if (!isInitialized || !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
