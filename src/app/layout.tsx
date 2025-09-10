import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import { getCurrentUser } from "@/lib/get-current-user";
import { AuthProvider } from "@/contexts/AuthProvider";
import { CartProvider } from "@/contexts/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="pt-br" data-scroll-behavior="smooth">
      <body className="antialiased">
        <AuthProvider initialUser={user}>
          <CartProvider>
            <ConditionalHeader />
            {children}
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} theme="light" newestOnTop />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
