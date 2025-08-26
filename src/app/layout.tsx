import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import { getCurrentUser } from "@/lib/get-current-user";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <AuthProvider initialUser={user}>
          <ConditionalHeader />
          {children}
          <ToastContainer position="top-right" autoClose={3000} theme="light" newestOnTop />
        </AuthProvider>
      </body>
    </html>
  );
}
