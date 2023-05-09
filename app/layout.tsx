import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Devnoob",
  description: "Dev Noob, journal d'un développeur Full stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen max-w-2xl mx-auto">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
