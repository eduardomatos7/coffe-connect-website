import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
