import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import { ConvexClientProvider } from "@/components/ui/providers/convex-provider";
import { ModalProvider } from "@/components/ui/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "In-Motion",
  description: "A place to collab and work together on projects",
  icons: {
    icon: [
      {
        media : "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },{
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png",
        href: "/favicon-dark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="motion-theme"
          > 
            <Toaster position="bottom-center"/>
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
