import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Eri Schön",
  description: "Journal d'un apprenti développeur Full stack",
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
        <main className="flex-grow px-4 my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
