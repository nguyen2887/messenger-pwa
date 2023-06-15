import { MenuSideBar } from "@/components/layouts/menu-side-bar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger",
  description: "Messenger Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex h-screen")}>
        <MenuSideBar />

        {children}
      </body>
    </html>
  );
}
