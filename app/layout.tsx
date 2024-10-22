import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "altahier saleh",
  description: "created by me",
  icons: {
    icon: "/favicon.ico", // Correct favicon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-[10px] bg-slate-950">
        {children}
      </body>
    </html>
  );
}
